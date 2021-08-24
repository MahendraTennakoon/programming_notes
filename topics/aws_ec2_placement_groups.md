# EC2 Placement Groups

- Sometimes, we need control over the EC2 instance placement strategy
- That strategy can be defined using placement groups
- When we create a placement group, we specify one of the following strategies for the group
  - cluster: clusters instances into a low latency group in a single Availability Zone (high performance, high risk)
  - spread: spreads instances across underlying hardware (max 7 instances per AZ). Useful for critical applications.
  - partition: spreads instances across many different partitions (which rely on a different sets of racks) within an AZ. 
Scales to 100s of EC2 instances per group. Good for applications like Hadoop, Cassandra, Kafka.

## Placement Group - Cluster

- Same rack, same availability zone
- Pros:
  - Great network
- Cons:
  - If the rack fails, all instances fail at the same time
- Use cases:
  - Big data jobs that need to complete fast
  - Applications that need extremely low latency and high network throughput 

## Placement Group - Spread

- All the instances are located in different hardware
- Pros:
  - Can span across availability zones
  - Reduced risk of simultaneous failure (EC2 instances are on different hardware)
- Cons:
  - Limited to 7 instances per AZ per placement group
- Use cases:
  - Applications that need to maximize high availability
  - Critical applications where each instance must be isolated from failures of each other

## Placement Group - Partition

- Each partition represents a server rack
- Partitions can span across multiple AZs in the same region
- We can have 7 partitions per AZ
- Each partition can have many EC2 instances
- Instances in a partition do not share hardware with instances in other partitions
- A partition failure can affect many instances, but it won't affect other partitions
- EC2 instances get access to partition information as meta data
- Use cases:
  - Partition aware big data applications (eg: HDFS, HBase, Cassandra, Kafka)
