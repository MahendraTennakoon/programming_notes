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
