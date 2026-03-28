# Notes on SSH authentication at GitHub  

SSH authentication works in the following way: 

- SSH private and public keys are stored in \<home\>/.ssh directory.

- SSH hosts can be defined in \<home\>/.ssh/config file. For example, 

```
Host acc_something
    HostName github.com
    User git 
    IdentityFile ~/.ssh/<private_key_file>
```

- The SSH identity file should be added to the ssh agent using the command: 

```
ssh-add ~/.ssh/<private_key_file>
```

- The SSH connection can be tested using the command: 

```
ssh -T acc_something
```

- For a given git repository, the remote URL should be set to use the SSH host defined in the config file. For example, 

```
git remote set-url origin git@acc_something:<username>/<repository>.git
``` 

For a concrete example, if the SSH host is defined as `acc_something` in the config file, and the repository is `my-repo` owned by `my-username`, then the remote URL should be set to: 

```
git@acc_something:my-username/my-repo.git
```


- The command to test the remote URL is: 

```
git remote -v
```

*NOTE:* 
- The remote repository URL can be set per repository. This means that different repositories can use different SSH hosts and keys if needed. 




