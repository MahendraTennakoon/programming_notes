# AWS

## VPC
* provides separations for different purposes

* security groups can be accessed within regions.
* subnets can be accessed within an availability zone.
* routing table spans across a region.

### NAT Gateway
* used to route traffic from a private network to internet.
* One way. Does not allow outside access.

### Network ACLs
* spans across zones.
* similar to a firewall.

## EC2 Hibernate

- If an EC2 instance is stopped, data on disk (EBS) is kept intact for the next start
- If an EC2 instance is terminated, data on EBS volumes (root) will be destroyed. (a secondary drive will not be destroyed)
- On instance start, the following happens
  - First start: the OS boots up and the EC2 user data script is run
  - Following starts: the OS boots up
  - Then your application starts, cache warms up (if available)
  - All of this can take time
- EC2 Hibernate
  - The in-memory state (RAM) is preserved
  - The instance boot is much faster (the OS is not stopped/restarted)
  - Under the hood, the state in RAM is written to a file in root EBS volume
  - The root EBS volume must be encrypted
  - Instance RAM must be less than 150 GB
  - Not supported for bare metal instances
  - Root volume: must be EBS, encrypted, large
  - Avilable for in demand and reserved instances (not available for spot instances)
  - An instance cannot be hibernated for more than 60 days
- Use cases:  
  - Long running processes can be paused
  - RAM state can be saved
  - good for services that take a long time to initialize

## vCPU

- Multiple threads can run on one CPU
- Each thread is represented as a vCPU

## EC2 Instance Storage

### EBS

- EBS (Elastic Block Store) is a network drive you can attach to your instances while they run
- It enables the instance to persist data even after instance termination
- They are bound to a specific Availability Zone (to move a volume across, you first need to snapshot it)
- It is a network drive (not a physical drive). So there can be a delay since it has to communicate with the instance over a network
- An EBS drive can be detached from one instance and attached to another very quickly
- Has a provisioned capacity (size in GBs, IOPS)
  - You get billed for the provisioned capacity
  - Capacity of the drive can be increased over time

### EBS Snapshots

- Make a backup of your EBS volume at a point in time
- Not necessary to detach the volume to get snapshot of it, but it is recommended
- Can copy snapshots across AZs or regions (good way to transfer some data between regions)

## AMI

- Amazon Machine Image
- An AMI is a customization of an EC2 instance
  - You can add your own software, configuration, OS, monitoring etc...
  - Faster boot/configuration time since all your software is pre-packaged
- AMIs are built for a specific region, but can be copied across regions
- We can launch EC2 instances from 
  - public AMIs (provided by AWS)
  - your own AMI (you create and maintain them)
  - AMI from AWS marketplace: An AMI someone else made (and potentially sells)
 
 ### Process for creating an AMI from an EC2 instance
 
 - Start an EC2 instance and customize it
 - Stop the instance (for data integrity)
 - Build an AMI (this will also create EBS snapshots)
 - Launch instances from the custom AMI

## EC2 Instance Store

- EBS volumes are network drives with good, but limited performance
- If you need a high performance hardware disk, use EC2 instance store
- Better I/O performance
- EC2 instance store loses its storage if the instance is stopped (ephemeral). Therefore, not a durable long-term place to store data
- Good for Buffer, cache, scratch data, termporary content
- There is a risk of data loss if hardware fails
- Backups and replication are your responsibility

## EBS Volume types

- There are 6 volume types
  - gp2/gp3 (SSD): General purpose SSD that balances price to performance for a wide variety of workloads
  - io1/io2 (SSD): Highest performance SSD volume for mission-critical low-latency or high-throughput workloads
  - st1 (HDD): low cost HDD volume designed for frequently accessed, throughput intensive workloads
  - sc1 (HDD): lowest cost HDD volume designed for less frequently accessed workloads
- EBS volumes are characterized in size | throughput | IOPS
- Only gp2/gp3 and io1/io2 can be used as boot volumes

### EBS volume type use cases

- General Purpose SSD
  - cost effective, low latency
  - can be used for system boot volumes, virtual desktops, development and test environments
  - can vary between 1GiB-16TiB
  - gp3 is the newer generation
    - Baseline of 3000 IOPS and throughput of 125 MiB/s
    - Can increase IOPS upto 16,000 and throughput upto 1000 MiB/s independently
  - gp2:
    - small gp2 volumes can burst upto 3000 IOPS
    - size of the volume and IOPS are linked, max IOPS is 16000
    - 3 IOPS per GB, means at 5334 GB we are at the max IOPS

- Provisioned IOPS (PIOPS) SSD
  - good for critical business applications with sustained IOPS performance
  - or applications that need more than 16,000 IOPS
  - great for database workloads (sensitive to storage perf an consistency)
  - io1/io2 (4 GiB - 16 TiB)
    - Max PIOPS: 64,000 for Nitro EC2 instances and 32000 for other
    - Can increase PIOPS independently from IOPS
    - io2 has more durability and more IOPS per GiB at the same price as io1
  - io2 Block Express (4 GiB - 64 TiB)
    - sub millisecond latency
    - Max PIOPS: 256,000 with an IOPS:GiB ratio of 1000:1
  - supports EBS multi-attach

- Hard Disk Drives (HDD)
  - cannot be a boot volume
  - 125 MiB to 16 TiB
  - st1: Throughput optimized HDD (st1)
    - Big data, data warehouses, log processing
    - Max throughput 500 MiB/s - max IOPS 500
  - cold HDD (sc1)
    - for data that is infrequently accessed
    - scenarios where lowest cost is of high importance
    - Provides a max throuput of 150 MiB/s and max IOPS of 250

## EBS Multi-Attach (io1/io2 family)
