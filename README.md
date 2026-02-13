# Overall 

This is generic repository for my programming projects.

- nn_projects: This is a repository for my neural network projects. It contains code for various neural network architectures and implementations.
- fullstack_projects: This is a repository for my full stack development projects. It contains code for various web applications and services.


# Handy git and ssh commands 

## Notes on SSH authentication for Remote Desktop at GitHub  

SSH authentication works in the following way: 

- SSH private and public keys are stored in \<home\>/.ssh directory.

- SSH hosts can be defined in \<home\>/config file. For example, 

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

- The command to test the remote URL is: 

```
git remote -v
```



