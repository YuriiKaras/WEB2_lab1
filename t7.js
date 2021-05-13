class Person
{
    constructor(pername)
    {
        this.name = pername;
        this.projects = [];
    }

    findprojpos(projectname)
    {
        for(let i = 0; i < this.projects.length; i++){
            if(this.projects[i].name = projectname){
                return i;
            }
        }
        return NaN;
    }

    addproj(proj)
    {
        this.projects.push(proj);
    }

    edproj(newproj, oldprojname)
    {
        if(findprojpos(oldprojname) == NaN){
            this.projects.push(newproj);
        }
    }
    
    delproj(projname)
    {
        let pos = this.findcustpos(projname);
        if(pos != NaN){
            this.projects.splice(pos, 1);
        }
    }

    getprojnames()
    {
        let arr = []; 
        for(let i=0; i<this.projects.length; i++){
            arr.push(this.projects[i].name);
        }
        return arr;
    }

}

class Customer extends Person
{
    
    constructor(cusname)
    {
        super(cusname);
        //this.name = cusname;
    }
    
    
}

class Executor extends Person
{
    
    constructor(exname)
    {
        super(exname);
        //this.name = exname;
    }
}

class Project
{
    constructor(prname)
    {
        this.name = prname;
        this.executors = [];
        this.customers = [];
    }    
    
    findcustpos(custname)
    {
        for(let i = 0; i < this.customers.length; i++){
            if(this.customers[i].name = custname){
                return i;
            }
        }
        return NaN;
    }
}

class Curproj extends Project
{

    constructor(prname)
    {
        super(prname);
    }

    addcust(cust) 
    {
        this.customers.push(cust);
    }

    addexec(exec)
    {
        this.executors.push(exec)
    }

    changecust(newcust, oldcustname)
    {
        let pos = this.findcustpos(oldcustname)
        if(pos == NaN){
            return NaN
        }
        else{
            this.customers[pos] = newcust;
        }
    }
    
    delcust(custname)
    {
        let pos = this.findcustpos(pldcustname);
        if(pos != NaN){
            this.customers.splice(pos, 1);
        }
    }

}
 
var projectname = `project1`;
var custname = `vitalik`;
var exname = `yuri`;

var pr1 = new Curproj(projectname);
var cust1 = new Customer(custname);
var ex1 = new Executor(exname);

pr1.addexec(ex1);
pr1.addcust(cust1);

var cust2 = new Customer(`Andrew`);
pr1.changecust(cust2, custname);


console.log(pr1.findcustpos(`Andrew`));

cust1.addproj(pr1);
ex1.addproj(pr1);

var pr2 = new Curproj('okulyar');
pr2.addexec(ex1);
pr2.addcust(cust1);

cust1.addproj(pr2);
ex1.addproj(pr2);

//console.log(cust1.getprojnames());
console.log(ex1.getprojnames());




