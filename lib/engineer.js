class Engineer extends Employee {

    constructor(name,id,email,github) {
        this.github=github;
        super(name,id,email,'Engineer')
    }

    getGithub () {
        return this.github
    }



}