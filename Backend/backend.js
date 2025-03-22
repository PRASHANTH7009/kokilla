import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

mongoose.connect("mongodb+srv://prasanth:kancharla@cluster.jufk4nc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")

const headerschema = mongoose.Schema({
    title:String,
    desc:String
})

const bodyschema = mongoose.Schema({
    user:String,
    about:String
})

const searchschema = mongoose.Schema({

    search: String,

})

const Header = mongoose.model("Header",headerschema)

const Body = mongoose.model("Body",bodyschema)

const Search = mongoose.model("search",searchschema)

app.use(express.json())

app.use(cors())

app.post('/header',async(req,res) => {
    const title = req.body.title
    const desc = req.body.desc
    Header.create({title,desc})
})

app.get('/header',async(req,res) => {

    const result = await Header.find()
    res.send(result)
})


app.post('/body',async(req,res) => {
    const user = req.body.user
    const about = req.body.about
    Body.create({user,about})
})

app.post('/search', async(req,res) => {
    const search = req.body.search
    Search.create({search})
})

app.get('/search', async(req,res) => {
    const result = await Search.find()
    res.send(result)
})

app.get('/user/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const user = await Body.findOne({ user: username });
        res.json(user);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(9000)
