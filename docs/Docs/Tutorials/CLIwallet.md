---
sidebar_position: 9
---

# CLI Wallet tutorial


### **Download the wallet**
Go to [Releases](https://github.com/EquilibriaCC/equilibria-wallet/releases) in the project Github and search for the most up-to-date release.

Next, you will want to download wallet for your OS. Once you have the wallet downloaded, go ahead and move all of the downloaded files into a folder.

:::note
Wallet download file can trigger a firewall quarantine. Ensure that the location you will move and keep the file in for installation has an exclusion set in order to bypass any actions that a virus protection/firewall software will take.
:::
### **Running the Equilibria Daemon**

Now that your wallet is downloaded and files are in your folder, go ahead and run
daemon by double-clicking it.

:::note
This step is optional, only if you want to download entire blockchain
:::


### **Running the CLI Wallet on a Remote Node**
If you want to start the wallet up faster and not download the entire blockchain onto your computer, you have the option of connecting to one of our [remote nodes](/Docs/Info/Nodes).
Open wallet-cli file by double clicking it and open your wallet, then run below command:

Command: ```set_daemon IP:Port```

Example: ```set_daemon xeq.privacycoin.club:9231```


### **Creating a wallet**
Go ahead and start up the wallet-cli.
Once it is running, you will be prompted to create a wallet. If you are creating new wallet you can now pick a name. Next, you'll be prompted to type Y/Yes/N/No. Go ahead and type Yes.
Now you need to set a password. When you type you will notice that cursor is not moving. Everything is fine, keep typing.
You will have to repeat your password again.

After setting your password you will be asked to select a language. Pick whatever language you prefer by typing the corresponding numbers:

After selecting your language, you will be given your seed phrase. Copy these words somewhere secure (ex. Text document, usb drive, piece of paper).
Confirm and give your wallet some time to initiate on blockchain. If your wallet brings (out of sync) message type in refresh and press enter.

### **Restore an existing wallet with a .keys file**
If you go back to the folder where you placed the downloaded files, you will now see two more files that are named after the wallet you just made. If you have created a wallet in that past, all you need to do is find your wallet name and .keys files and move them to your wallet folder.
After you move your old .keys file in the folder, go ahead and run wallet-cli, and when asked for wallet name type in existing wallet name.

### **Commands **
You can find a list of the most used commands [here](/Docs/Tutorials/Commands)

