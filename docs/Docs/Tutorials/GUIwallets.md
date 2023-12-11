---
sidebar_position: 9
---

# GUI Wallet tutorial


### **Download the wallet**
Go to [Releases](https://github.com/EquilibriaCC/equilibria/releases) in the project Github and search for the most up-to-date release.

Next, you will want to download wallet for your OS. Once you have the wallet downloaded, go ahead and move all of the downloaded files into a folder.

:::note
Wallet download file can trigger a firewall quarantine. Ensure that the location you will move and keep the file in for installation has an exclusion set in order to bypass any actions that a virus protection/firewall software will take.
:::
### **Starting up the GUI wallet**

Once the downloaded file is moved, open the Equilibria Wallet.exe executable. There will be prompts that you will need to confirm about access and where to save the wallet installed data.

If there is an existing location where wallet data already exists, choose that location as the destination folder.

### **Creating a new wallet**

Upon completion of the installation, open the wallet application and there will be a prompt for creating a new wallet. If you are installing with a previous wallet already saved locally the application will be brought to a home screen where you can see those wallets. If you are brought to the home screen, hit the + sign at the top right corner, and then click Create new wallet.

To begin creating a new wallet, give the wallet a name, choose the language for the seed phrase, and create an optional password, which is highly recommended. This password will be used to open the wallet as well as for confirmation when making a transaction. Now click CREATE ACCOUNT.

:::note
The name assigned to the wallet will create a .keys file where the wallet name will precede the .keys. The .keys file can be used to restore a wallet from file or allow a future wallet update to recognize the wallet if the update is installed in the same location as the .keys file.
:::

You will now be given the seed words to the new wallet. Be sure to copy and record the seed phrase as it will allow you to restore the wallet if something goes wrong or if you accidentally lose your .keys file. Now click OPEN ACCOUNT.

### **Sync your Daemon**

After clicking OPEN ACCOUNT, the main page of the wallet will be opened. From here you will want to make sure your daemon is syncing. To go to the daemon settings, click on the hamburger menu (i.e. the 3 bars at the top right), then click daemon settings.

The daemon settings menu will allow for choices on how to sync the wallet. The simplest way to set up the wallet is to use a remote daemon. To connect to a remote node, click on the ‘Remote Node Host’ dropdown menu and choose one of the default nodes in the list. After you finish, hit save. You will now need to restart your wallet.

In the ‘Remote Node Host’ menu a new node address can be entered and saved by typing the URL of the node and then clicking the ‘ADD NODE’ button to save it locally in application.

Note, that if this is a fresh install for the wallet, the entire blockchain history will need to be loaded and this could take a substantial amount of time. If the remote node doesn’t show the latest block history and/or the wallet is not updating, another remote node host may need to be selected to ensure that the wallet is up to date.

When you open up your wallet once again, you will see the status of your daemon at the bottom. Wait for it to say Status: READY at the bottom left.

### **Transactions**

By default, the wallet will open in the TRANSACTIONS section. The entire transaction history of the wallet will be visible and details of each transaction can be seen by clicking and expanding the details of the transaction. An additional option is to filter by outgoing or incoming transactions in the ‘FILTER BY TRANSACTION TYPE’.

### **Sending XEQ**

The next tab on the wallet homepage is for making outgoing transactions to send XEQ. Click on the ‘SEND’ tab near the top of the wallet to see the options. You will be brought to a different page that allows you to transfer XEQ out of your wallet.

At the top of the wallet you can see the total amount of unlocked XEQ that is available to send as well as the amount in USD. To send XEQ to another person, enter the amount of XEQ to send in the ‘AMOUNT’ section and then copy the destination wallet address in the ‘ADDRESS’ box. Addresses can be saved into an address book for commonly used addresses by checking the box ‘Save to address book’. This will make the address available in the contacts for future transactions.
Now enter your wallet password used when the wallet was created and then hit SEND.

Lastly, you will be given confirmation that your transaction went through. You can go back to the TRANSACTIONS page and see that it is pending. If you click on the transaction, you will be given more information on the transaction.

### **Receiving XEQ**

To be able to receive XEQ, the wallet address to give out is available in the receive tab. The primary address account is the main one assigned to the wallet account. Secondary wallet addresses can be used to help make a more anonymized approach to having wallet addresses that are made public and/or exchanged with others.

There are two different ways to share the wallet address, that is either by QR code or by clicking on the copy button like the image below and sharing it that way.

### **Staking XEQ**

Staking XEQ is an option to generate yield from XEQ in a wallet by locking them to a staking node. The minimum requirement to stake XEQ is 100 XEQ and the maximum that can be staked in a fresh node is 35,000 XEQ. To begin staking, ensure that the minimum amount is unlocked in the wallet and then choose a staking pool in the ‘STAKING POOLS’ section. Ensure that the staking pool has enough space available to accept your proposed stake and click on the ‘STAKE’ button.

A prompt will come up asking for the amount to stake and the desired amount can be entered manually by typing into the form or the max amount available can be chosen by clicking the ‘MAX’ button. Once the amount is entered and meets the criteria a confirmation box will appear with the fees associated with the transaction. The current fee for staking operations is 0.1% of the amount, for example a stake amount of 10,000 XEQ will be charged a 10 XEQ fee.

Another potential complication that can occur while staking is having too many UTXOs within the wallet, making the transaction unable to process correctly. If the staking transaction gives errors, perform a ‘Sweep All’ of the wallet to consolidate the UTXO’s in the wallet by essentially sending a transaction back to the same wallet. This can be easily done by clicking on the ‘SETTINGS’ tab and choosing ‘Sweep All’. A confirmation prompt will then request the wallet’s password and then the transaction will go through to consolidate the UTXOs in the wallet. Please allow for enough time that the transaction receives enough confirmations and is processed completely, before attempting to stake again.

If you have any additional questions, feel free to join our [discord](https://discord.gg/Ps9pBmc2QX)!

