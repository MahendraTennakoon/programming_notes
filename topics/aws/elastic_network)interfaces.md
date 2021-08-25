# Elastic Network Interfaces (ENI)

- Logical component in a VPC that represents a virtual network card
- The ENI can have the following attributes
  - One primay private IPv4 and one or many secondary IPv4s
  - One Elastic IP (IPv4) per private IPV4
  - One public IPv4
  - One or more security groups
  - A MAC address
- ENI can be created independently and attached to EC2 instances on the fly for failover
- Bound to a specific Availability Zone (AZ)
