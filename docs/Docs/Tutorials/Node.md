---
sidebar_position: 9
---

# Setup an Oracle Node



## **Automatic Setup**

Community member created a script that automates the setup process. Click the link below to go to Github page for that script:
- [Automatic Script (3 nodes)](https://github.com/GreggyGB/Node-Quick-Start).
- [Automatic Script (multinodes)](https://github.com/misterr-labs/eqsnode-installer-script).

Support group and video guide: [https://t.me/XEQ_Node_Op_Tech_Support](https://t.me/XEQ_Node_Op_Tech_Support)

## **Manual Setup**

If you would prefer a manual setup follow below instructions
Hey everyone, this is a quick tutorial on how to setup an Equilibria Service Node. We will try to make this as simple and easy to understand as possible. If you have any additional questions after this article, let us know so we can improve upon it, thanks!

Tutorial adapted from [https://lokidocs.com/ServiceNodes/SNFullGuide/](https://lokidocs.com/ServiceNodes/SNFullGuide/)

**Service Node Requirements**

- Ubuntu Server
- 50gb Storage
- Min 4gb of Ram
- Chack  [https://explorer.equilibriacc.com](https://explorer.equilibriacc.com) at the top of the page for the XEQ staking requirement

### **Get your server**

Let’s get started. Choosing where to set up a Service Node is the biggest choice you will make when running a Service Node. There are a number of things to consider. Because you will be locking up funds for about 4 weeks at a time, you will want to ensure that your server has:
- A stable, relatively fast connection to be able to respond to ping requests to avoid being booted off the network
- At Least a 50GB SSD or Hard disk drive, this will be used to store the block-chain.
- Min 4GB ram
- A stable power supply. If your server goes down during the staking period, you may get kicked off the network, and not receive rewards while your funds are still locked for the remainder of the staking period.

Typically, the easiest and cheapest way to host a server outside of your home is to use a Virtual Private Server (VPS). There are thousands of options when it comes to VPS providers, but for now, just about any will do just fine.

### **Prepare your server**

Every provider has a slightly different way of issuing you access to your new VPS. Most will send an email with the IP address, root username, and a root password of the VPS.

To access your server, you will need a SSH client for your operating system. Because we’re on Windows today, we’ll download PuTTY, Mac users can also use PuTTY. If you’re a Linux user, you probably don’t want us telling you where to get a SSH client from.

To connect to our VPS we will need to paste the IP address into the SSH client’s “Host Name (or IP address)” input box and click the “Open” button. The Port number can usually just be left as 22.

After connecting, a terminal window will now appear prompting for your log-in details, username(root) and password, which were provided by your VPS provider. When entering your password, nothing will visually appear in the terminal. This is normal. Hit ```enter``` when it’s typed or pasted, and you should be logged in to your VPS.

Next, we should update our package lists, the below command downloads the package lists from the repositories and “updates” them to get information on the newest versions of packages and their dependencies. It will do this for all repositories and PPAs.

Run ```sudo apt update```

You will notice a bunch of package lists were downloaded, once this is complete run the below command to fetch new versions of any packages we currently have installed on the system.

Run ```sudo apt upgrade```

You will be prompted to authorize the use of disk space, type ```y``` and ```enter``` to authorize.

If you are prompted during the upgrade that a new version of any file is available then click the up and down arrows until you are hovering over install the package maintainer’s version and click ```enter```.

### **Create a non-root User**
Best practice when running a public server is to not run your software as the root user. Although it is possible to do everything as root, it is strongly recommended that you create a non-root user on our VPS by running the following command:

run ```adduser <username>```

Replacing ```<username>``` with a name you will log-in with. For this user-guide we will use snode as our username.

run ```adduser snode```

The terminal will prompt you for a new password for our newly created user. Use a secure password that is different from the root password.

Once the password has been set, the terminal will prompt you for a few details about the individual running the user. You can just hit ```enter``` through each of the inputs as the details are not important for the purposes of running a Service Node.

Once that’s done, run the following two commands to give our new account admin privileges and to change to such account.

```usermod -aG sudo snode```

```su – snode```

Before we proceed further, it is advised to close your terminal and reopen PuTTY to set up a saved session with our snode user. Your SSH client will have a load and save session function. For PuTTY we will need to type in our VPS IP address again, on the same screen type snode under “Saved Session”. Click on “Data” under the drop-down menu “Connection”, and type in snode (or your username defined before) into the input box “Auto-login username”. Go back to your session screen, where we entered the IP address, and click “Save”. You can load this session whenever you want to check on your Service Node.

### **Build Latest Equilibria**

Run ```sudo apt install wget unzip git```

Then: ```sudo apt update && sudo apt install build-essential cmake pkg-config libboost-all-dev libssl-dev libzmq3-dev libunbound-dev libsodium-dev libunwind8-dev liblzma-dev libreadline6-dev libldns-dev libexpat1-dev doxygen graphviz libpgm-dev qttools5-dev-tools libhidapi-dev libusb-dev libprotobuf-dev protobuf-compiler```

Next: ```git clone --recursive https://github.com/EquilibriaCC/Equilibria.git equilibria```

Then: ```cd equilibria && git submodule init && git submodule update```

Then: ```git checkout v17.1.0 ```

Then: ```make```

Finally ```cd build/Linux/_HEAD_detached_at_v17.1.0_/release && mv bin ~/```


### **Run Equilibria Service Node Daemon**

After downloading, you can run Equilibria daemon directly in your terminal, but this is not a viable approach to running it as a service node: when you close PuTTY the program running inside it will also shut down.

Instead, we will configure the Equilibria daemon as a system service that makes it automatically start up if the server reboots, and restarts it automatically if it crashes.

Create the eqnode.service file. Run
```sudo nano /etc/systemd/system/eqnode.service```

Copy the text below and paste it into you new file
```
[Unit]
Description=equilibria service node
After=network-online.target
[Service]
Type=simple
User=snode
ExecStart=/home/snode/bin/daemon --non-interactive --service-node
Restart=always
RestartSec=30s
[Install]
WantedBy=multi-user.target
```
If you chose a username other than ```snode```, then change snode in the ```User=``` and ```ExecStart=``` lines to the username you set.

Once completed, save the file and quit nano: ```CTRL+S``` -> ```X``` -> ```ENTER```.

Reload the systemd manager configuration (to make it re-read the new service file).

Run ```sudo systemctl daemon-reload```

Enable the eqnode.service_ so that it starts automatically upon boot.

Run ```sudo systemctl enable eqnode.service```

Start the eqnode.service.

Run ```sudo systemctl start eqnode.service```

Double check that all lines are exactly the same.
The daemon will now start syncing. You won’t be able to do much if it hasn’t synced.
To watch the progress at any time you can use the following command (hit Ctrl-C when you are done watching it). You should see it syncing the blockchain:

sudo ```journalctl -u eqnode.service -af```

Alternatively you can ask the daemon to report its sync status using the following command:
```~/bin/daemon status```

### **Service Node Registration**

Let’s get your service node registered! Grab your address from the wallet you would like to be rewarded.

Run ```~/bin/daemon prepare_sn```

Follow the prompted information and when you are finished you will be outputted a command shown here register_service_node ...
Copy that command and paste that into your wallet command line with the necessary funding.
Check your SN key on the [explorer](https://explorer.equilibriacc.com/).

To get your key run ```~/bin/daemon print_sn_key```

If you want more a detailed Service Node status, you can use the follow command: ```~/bin/daemon print_sn_status```