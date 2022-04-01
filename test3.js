const fs = require('fs')

const today = new Date()

if (fs.existsSync('lists.csv')) {
    fs.unlink('lists.csv')
}
fs.writeFile('lists.csv', "id,matroshkaRevision,created_at,revision,type,title,isTemporary,prepopulated_type,requestID,wasLocallyCreated,list_type,public\n", function(err) {
    if(err) {
        console.error(err)
    }
})

fs.readFile("./Wunderlist/Wunderlist/list-2.json", "utf8", function(err, data) {
    if(!err) {
        var jsonListData = JSON.parse(data)
        var jsonListDataValuesLength = jsonListData.length                
        for(var i = 0; i < jsonListDataValuesLength; i++) {
            id = jsonListData[i].id
            matroshkaRevision = jsonListData[i].matroshkaRevision
            created_at = jsonListData[i].created_at
            revision = jsonListData[i].revision
            type = jsonListData[i].type
            title = jsonListData[i].title
            isTemporary = jsonListData[i].isTemporary
            prepopulated_type = jsonListData[i].prepopulated_type
            requestID = jsonListData[i].requestID
            wasLocallyCreated = jsonListData[i].wasLocallyCreated
            list_type = jsonListData[i].list_type
            public = jsonListData[i].public

            var membershipWrite = (
                id+","+
                matroshkaRevision+","+
                created_at+","+
                revision+","+
                type+","+
                title+","+
                isTemporary+","+
                prepopulated_type+","+
                requestID+","+
                wasLocallyCreated+","+
                list_type+","+
                public+"\n"
            )
            fs.appendFile('lists.csv', membershipWrite, err=> {
                if(err) {
                    console.error(err)
                }
            })
        }
    }
});
