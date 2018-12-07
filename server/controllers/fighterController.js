let fighters = [
    {
        name: "Mario",
        franchise: "Super Mario Bros.",
        image: "ad;lfkjadsf.jpg",
        id: 1
    },
    {
        name: "Link",
        franchise: "The Legend of Zelda",
        image: ";lkjadsfl;kj.jpeg",
        id: 2
    },
    {
        name: "Captain Falcon",
        franchise: "F-Zero",
        image: "asdf;lakjdsf.jpeg",
        id: 3
    },
    {
        name: "Fox",
        franchise: "Star Fox",
        image: "asdf;laksjdf.jpeg",
        id: 4
    }
];

let id = 5;

module.exports = {
    getAllFighters: (req, res) => {
        res.status(200).send(fighters);
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