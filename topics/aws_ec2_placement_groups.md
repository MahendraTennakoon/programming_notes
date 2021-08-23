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
