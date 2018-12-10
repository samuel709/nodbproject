let fighters = [
    {
        name: "Mario",
        franchise: "Super Mario Bros.",
        image: "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/250px-Mario_SSBU.png",
        id: 1
    },
    {
        name: "Link",
        franchise: "The Legend of Zelda",
        image: "https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/250px-Link_SSBU.png",
        id: 2
    },
    {
        name: "Captain Falcon",
        franchise: "F-Zero",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Captain_Falcon_character_portrait.png",
        id: 3
    },
    {
        name: "Fox",
        franchise: "Star Fox",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Fox_Mccloud.png/220px-Fox_Mccloud.png",
        id: 4
    },
    {
        name: "Donkey Kong",
        franchise: "Donkey Kong",
        image: "https://vignette.wikia.nocookie.net/vsbattles/images/8/83/1Iz5XD2.png/revision/latest?cb=20180613004739",
        id: 5
    },
    {
        name: "Pikachu",
        franchise: "Pokemon",
        image: "https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/250px-Pikachu_SSBU.png",
        id: 6
    },
    {
        name: "Yoshi",
        franchise: "Super Mario Bros.",
        image: "https://pbs.twimg.com/media/DnYoOA5W0AAcV4N.jpg",
        id: 7
    },
    {
        name: "Kirby",
        franchise: "Kirby",
        image: "https://i.imgur.com/B8lJrPw.png",
        id: 8
    }
];

let id = 9;

module.exports = {
    getAllFighters: (req, res) => {
        res.status(200).send(fighters);
    },
    getFighter: (req, res) => {
        const fighterName = req.params.name;
        const fighterIndex = fighters.findIndex(fighter => fighter.name == fighterName)
        const fighter = []
        if (fighters[fighterIndex] == null){
            return res.status(404).send("Fighter not found")
        } else {
            fighter.push(fighters[fighterIndex])
            res.status(200).send(fighter);
        } 
    },
    getFightersByFranchise: (req, res) => {
        const franchiseName = req.params.franchise;
        const fightersByFranchise = [];
        for (let i = 0; i < fighters.length; i++){
            for (prop in fighters[i]){
                if (fighters[i][prop] == franchiseName){
                    fightersByFranchise.push(fighters[i])
                }
            }
        }
        res.status(200).send(fightersByFranchise);
    },
    addFighter: (req, res) => {
        let newFighter = {
            name: req.body.name,
            franchise: req.body.franchise,
            image: req.body.image,
            id: id
        }
        id++
        fighters.push(newFighter)
        res.status(200).send(fighters);
    },
    deleteFighter: (req, res) => {
        const deleteID = req.params.id;
        const fighterIndex = fighters.findIndex(fighter => fighter.id == deleteID)
        
        fighters.splice(fighterIndex, 1)

        res.status(200).send(fighters)
    }
}