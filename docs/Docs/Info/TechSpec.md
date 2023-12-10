---
sidebar_position: 5
---

# Technical specifications

- Block time: 120
- Difficulty Algorithm: LWMA v3
- Max Supply: 84,000,000
- Algorithm: CN-GPU
- Port: 9231
- p2p Port: 9230

**CryptoNight GPU**

CN-GPU is a CryptoNight Algorithm developed by Ryo with major improvements to their previous algorithm, CN-Heavy. The goal of this algorithm is to achieve a concept of fair GPU mining:
- Maximum equality for both AMD and NVIDIA lineups of GPUs.
- Scalable performance from low-end to high-end GPUs.
- Further slow down CPUs in mining, making botnet creation times more inefficient.
- ASIC-resistant.
- FPGA-resistant.
- Inability to attack the network using Nicehash.

CN-GPU is an algo that heavily relies on computing capabilities of the card, and is not dependant on the amount of GPU memory. The CN-GPU based FP32 math is the first of it's kind in the crypto world. Ryo accomplished each of these goals in the following ways:
- The hashrate of NVIDIA GPUs has been increased by up to 35% (depending on the card model) compared to CN-Heavy. Testing showed the potential of getting results comparable by compute capabilities cards. However, some AMD cards have shown a decrease in hashrate compared to CN-heavy.
- If your GPU A is faster in Flops than GPU B - it will be faster in CN-GPU algo.
- CPUs are slowed down even more e.g: Intel i3 - 4h/s (maximum - 4 threads), AMD Ryzen 1700 - 100hs (max - 16 threads)
- Known ASICs are not capable of handling such computations; the cost of creating an ASIC of this type is too high to be considered probable.
- FPGAs can be programmed to execute any algo, but FP32 math is heavy even for these kinds of devices. It would cost thousands of USD while achieving comparable results to a couple of hi-end GPUs.
- It is obvious that NH won't be supported for a while. Kkeep in mind that if the algo becomes popular among other projects, then there is a chance of it being added.

