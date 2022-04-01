const fs = require('fs')

const today = new Date()

if (fs.existsSync('memberships.csv')) {
    fs.unlink('memberships.csv')
}

fs.writeFile('memberships.csv', "membershipid,membershipname,membershipstate,membershipmatroshkaRevision,membershipowner,membershiprevision,membershipuser_id,membershiptype,membershiptask_id,membershipisTemporary,membershipmuted,membershiprequestID,membershipwasLocallyCreated,membershiplist_id,membershipsender_id,membershipemail\n", function(err) {
    if(err) {
        console.error(err)
    }
})


if (fs.existsSync('tasks.csv')) {
    fs.unlink('tasks.csv')
}
fs.writeFile('tasks.csv', "taskcompleted_at,taskdue_date,taskrecurrence_count,tasktitle,taskmatroshkaRevision,taskcreated_by_id,tasklist_id,taskcompleted,taskrequestID,taskrevision,taskwasLocallyCreated,taskisTemporary,tasktype,taskrecurrence_type,taskid,taskstarred,taskcompleted_by_id,taskcreated_at,taskassigner_id\n", function(err) {
    if(err) {
        console.error(err)
    }
})


if (fs.existsSync('taskposition.csv')) {
    fs.unlink('taskposition.csv')
}
fs.writeFile('taskposition.csv', "taskpositionrevision,taskpositionrequestID,taskpositionwasLocallyCreated,taskpositionid,taskpositionlist_id,taskpositionvalues,taskpositiontask_id,taskpositionmatroshkaRevision,taskpositionuser_id,taskpositiontype,taskpositionisTemporary\n", function(err) {
    if(err) {
        console.error(err)
    }
})


if (fs.existsSync('notes.csv')) {
    fs.unlink('notes.csv')
}
fs.writeFile('notes.csv', "noterevision,noterequestID,notewasLocallyCreated,noteid,notecontent,notetask_id,notematroshkaRevision,notetype,noteisTemporary\n", function(err) {
    if(err) {
        console.error(err)
    }
})

if (fs.existsSync('taskcomments.csv')) {
    fs.unlink('taskcomments.csv')
}
fs.writeFile('taskcomments.csv', "taskcommentid,taskcommentmatroshkaRevision,taskcommentauthorid,taskcommentauthorname,taskcommentauthoravatar,taskcommentcreated_at,taskcommentrevision,taskcommenttype,taskcommenttask_id,taskcommentisTemporary,taskcommenttext,taskcommentrequestID,taskcommentwasLocallyCreated,taskcommentlocal_created_at\n", function(err) {
    if(err) {
        console.error(err)
    }
})


if (fs.existsSync('taskcommentstate.csv')) {
    fs.unlink('taskcommentstate.csv')
}
fs.writeFile('taskcommentstate.csv', "taskcommentstatematroshkaRevision,taskcommentstaterequestID,taskcommentstatewasLocallyCreated,taskcommentstateid,taskcommentstatelistID,taskcommentstatetask_id,taskcommentstatematroshkaRevision,taskcommentstatelast_read_id,taskcommentstatetype,taskcommentstateisTemporary,taskcommentstateunread_count\n", function(err) {
    if(err) {
        console.error(err)
    }
})


if (fs.existsSync('subtask_positions.csv')) {
    fs.unlink('subtask_positions.csv')
}
fs.writeFile('subtaskposition.csv', "subtaskpositionrevision,subtaskpositionrequestID,subtaskpositionwasLocallyCreated,subtaskpositionid,subtaskpositionlist_id,subtaskpositionvalues,subtaskpositiontask_id,subtaskpositionmatroshkaRevision,subtaskpositionuser_id,subtaskpositiontype,subtaskpositionisTemporary\n", function(err) {
    if(err) {
        console.error(err)
    }
})


if (fs.existsSync('subtask.csv')) {
    fs.unlink('subtask.csv')
}
fs.writeFile('subtask.csv', "subtaskid,subtaskcreated_by_id,subtaskcompleted_by_id,subtaskmatroshkaRevision,subtaskcreated_at,subtaskrevision,subtaskcompleted,subtasktype,subtasktitle,subtasktask_id,subtaskisTemporary,subtaskrequestID,subtaskwasLocallyCreated,subtaskcompleted_at\n", function(err) {
    if(err) {
        console.error(err)
    }
})

fs.readdir("./Wunderlist/Wunderlist/", function(err, files) {
    if(!err) {
        files.forEach(function (file) {
            var membershipid
            var membershipname
            var membershipstate
            var membershipmatroshkaRevision
            var membershipowner
            var membershiprevision
            var membershipuser_id
            var membershiptype
            var membershiptask_id
            var membershipisTemporary
            var membershipmuted
            var membershiprequestID
            var membershipwasLocallyCreated
            var membershiplist_id
            var membershipsender_id
            var membershipemail
    
            var taskcompleted_at
            var taskdue_date
            var taskrecurrence_count
            var tasktitle
            var taskmatroshkaRevision
            var taskcreated_by_id
            var tasklist_id
            var taskcompleted
            var taskrequestID
            var taskrevision
            var taskwasLocallyCreated
            var taskisTemporary
            var tasktype
            var taskrecurrence_type
            var taskid
            var taskstarred
            var taskcompleted_by_id
            var taskcreated_at
            var taskassigner_id
    
            var taskpositionrevision
            var taskpositionrequestID
            var taskpositionwasLocallyCreated
            var taskpositionid
            var taskpositionlist_id
            var taskpositionvalues
            var taskpositiontask_id
            var taskpositionmatroshkaRevision
            var taskpositionuser_id
            var taskpositiontype
            var taskpositionisTemporary
    
            var noterevision
            var noterequestID
            var notewasLocallyCreated
            var noteid
            var notecontent
            var notetask_id
            var notematroshkaRevision
            var notetype
            var noteisTemporary
    
            var taskcommentid
            var taskcommentmatroshkaRevision
            var taskcommentauthorid
            var taskcommentauthorname
            var taskcommentauthoravatar
            var taskcommentcreated_at
            var taskcommentrevision
            var taskcommenttype
            var taskcommenttask_id
            var taskcommentisTemporary
            var taskcommenttext
            var taskcommentrequestID
            var taskcommentwasLocallyCreated
            var taskcommentlocal_created_at
    
            var taskcommentstatematroshkaRevision
            var taskcommentstaterequestID
            var taskcommentstatewasLocallyCreated
            var taskcommentstateid
            var taskcommentstatelistID
            var taskcommentstatetask_id
            var taskcommentstatematroshkaRevision
            var taskcommentstatelast_read_id
            var taskcommentstatetype
            var taskcommentstateisTemporary
            var taskcommentstateunread_count
    
            var subtaskpositionrevision
            var subtaskpositionrequestID
            var subtaskpositionwasLocallyCreated
            var subtaskpositionid
            var subtaskpositionlist_id
            var subtaskpositionvalues
            var subtaskpositiontask_id
            var subtaskpositionmatroshkaRevision
            var subtaskpositionuser_id
            var subtaskpositiontype
            var subtaskpositionisTemporary
    
            var subtaskid
            var subtaskcreated_by_id
            var subtaskcompleted_by_id
            var subtaskmatroshkaRevision
            var subtaskcreated_at
            var subtaskrevision
            var subtaskcompleted
            var subtasktype
            var subtasktitle
            var subtasktask_id
            var subtaskisTemporary
            var subtaskrequestID
            var subtaskwasLocallyCreated
            var subtaskcompleted_at
            if (file.indexOf("membership") != -1) {
                //console.log("membership "+file)
                fs.readFile("./Wunderlist/Wunderlist/"+file, "utf8", function(err, data) {
                    if(!err) {
                        var jsonListData = JSON.parse(data)
                        var jsonListDataValuesLength = jsonListData.length                
                        for(var i = 0; i < jsonListDataValuesLength; i++) {
                            membershipid = jsonListData[i].id
                            membershipname = jsonListData[i].name
                            membershipstate = jsonListData[i].state
                            membershipmatroshkaRevision = jsonListData[i].matroshkaRevision
                            membershipowner = jsonListData[i].owner
                            membershiprevision = jsonListData[i].revision
                            membershipuser_id = jsonListData[i].user_id
                            membershiptype = jsonListData[i].type
                            membershiptask_id = jsonListData[i].task_id
                            membershipisTemporary = jsonListData[i].isTemporary
                            membershipmuted = jsonListData[i].pmuted
                            membershiprequestID = jsonListData[i].requestID
                            membershipwasLocallyCreated = jsonListData[i].wasLocallyCreated
                            membershiplist_id = jsonListData[i].list_id
                            membershipsender_id = jsonListData[i].sender_id
                            membershipemail = jsonListData[i].mail
                
                            var membershipWrite = (
                                membershipid+","+
                                membershipname+","+
                                membershipstate+","+
                                membershipmatroshkaRevision+","+
                                membershipowner+","+
                                membershiprevision+","+
                                membershipuser_id+","+
                                membershiptype+","+
                                membershiptask_id+","+
                                membershipisTemporary+","+
                                membershipmuted+","+
                                membershiprequestID+","+
                                membershipwasLocallyCreated+","+
                                membershiplist_id+","+
                                membershipsender_id+","+
                                membershipemail+"\n"
                            )
                            fs.appendFile('memberships.csv', membershipWrite, err=> {
                                if(err) {
                                    console.error(err)
                                }
                            })
                        }
                    }
                });
            }

            if (file.indexOf("note") != -1) {
                //console.log("note "+file)
                fs.readFile("./Wunderlist/Wunderlist/"+file, "utf8", function(err, data) {
                    if(!err) {
                        var note = JSON.parse(data)
                
                        noterevision = note[0].revision
                        noterequestID = note[0].requestID
                        notewasLocallyCreated = note[0].wasLocallyCreated
                        noteid = note[0].id
                        notecontent = "\""+note[0].content.replaceAll("\"","'")+"\""
                        notetask_id = note[0].task_id
                        notematroshkaRevision = note[0].matroshkaRevision
                        notetype = note[0].type
                        noteisTemporary = note[0].isTemporary
                
                        var noteWrite = (
                            noterevision+","+
                            noterequestID+","+
                            notewasLocallyCreated+","+
                            noteid+","+
                            notecontent+","+
                            notetask_id+","+
                            notematroshkaRevision+","+
                            notetype+","+
                            noteisTemporary+"\n"
                        )
                        fs.appendFile('notes.csv', noteWrite, err=> {
                            if(err) {
                                console.error(err)
                            }
                        })
                    }
                });
            }
            
            if (file.indexOf("task_position") != -1 || file.indexOf("task_comment") != -1) {
                if (file.indexOf("task_position") != -1) {
                    if (file.indexOf("subtask_position") != -1) {
                        //console.log("subtask_position "+file)
                        fs.readFile("./Wunderlist/Wunderlist/"+file, "utf8", function(err, data) {
                            if(!err) {
                                var subtask_position = JSON.parse(data)
                                subtaskpositionrevision = subtask_position[0].revision
                                subtaskpositionrequestID = subtask_position[0].requestID
                                subtaskpositionwasLocallyCreated = subtask_position[0].wasLocallyCreated
                                subtaskpositionid = subtask_position[0].id
                                subtaskpositionlist_id = subtask_position[0].list_id
                                subtaskpositionvalues = "\""+subtask_position[0].values+"\""
                                subtaskpositiontask_id = subtask_position[0].task_id
                                subtaskpositionmatroshkaRevision = subtask_position[0].matroshkaRevision
                                subtaskpositionuser_id = subtask_position[0].user_id
                                subtaskpositiontype = subtask_position[0].type
                                subtaskpositionisTemporary = subtask_position[0].isTemporary
                        
                                var subtaskpositionWrite = (
                                    subtaskpositionrevision+","+
                                    subtaskpositionrequestID+","+
                                    subtaskpositionwasLocallyCreated+","+
                                    subtaskpositionid+","+
                                    subtaskpositionlist_id+","+
                                    subtaskpositionvalues+","+
                                    subtaskpositiontask_id+","+
                                    subtaskpositionmatroshkaRevision+","+
                                    subtaskpositionuser_id+","+
                                    subtaskpositiontype+","+
                                    subtaskpositionisTemporary+"\n"
                                )
                                fs.appendFile('subtaskposition.csv', subtaskpositionWrite, err=> {
                                    if(err) {
                                        console.error(err)
                                    }
                                })
                            }
                        });
                    } else {
                        console.log("task_position "+file)
                        fs.readFile("./Wunderlist/Wunderlist/"+file, "utf8", function(err, data) {
                            if(!err) {
                                var task_position = JSON.parse(data)
                        
                                taskpositionrevision = task_position[0].revision
                                taskpositionrequestID = task_position[0].requestID
                                taskpositionwasLocallyCreated = task_position[0].wasLocallyCreated
                                taskpositionid = task_position[0].id
                                taskpositionlist_id = task_position[0].list_id
                                taskpositionvalues = "\""+task_position[0].values+"\""
                                taskpositiontask_id = task_position[0].task_id
                                taskpositionmatroshkaRevision = task_position[0].matroshkaRevision
                                taskpositionuser_id = task_position[0].user_id
                                taskpositiontype = task_position[0].type
                                taskpositionisTemporary = task_position[0].isTemporary
                        
                                var taskWrite = (
                                    taskpositionrevision+","+
                                    taskpositionrequestID+","+
                                    taskpositionwasLocallyCreated+","+
                                    taskpositionid+","+
                                    taskpositionlist_id+","+
                                    taskpositionvalues+","+
                                    taskpositiontask_id+","+
                                    taskpositionmatroshkaRevision+","+
                                    taskpositionuser_id+","+
                                    taskpositiontype+","+
                                    taskpositionisTemporary+"\n"
                                )
                                fs.appendFile('taskposition.csv', taskWrite, err=> {
                                    if(err) {
                                        console.error(err)
                                    }
                                })
                            }
                        });
                    }
                }
                if (file.indexOf("task_comment") != -1) {
                    if (file.indexOf("task_comments_state") != -1) {
                        //console.log("task_comments_state "+file)
                        fs.readFile("./Wunderlist/Wunderlist/"+file, "utf8", function(err, data) {
                            if(!err) {
                                var task_comment_state = JSON.parse(data)
                                var task_comment_stateLength = task_comment_state.length
                        
                                for(var m = 0; m < task_comment_stateLength; m++) {
                                    taskcommentstaterequestID = task_comment_state[m].requestID
                                    taskcommentstatewasLocallyCreated = task_comment_state[m].wasLocallyCreated
                                    taskcommentstateid = task_comment_state[m].stateid
                                    taskcommentstatelistID = task_comment_state[m].listID
                                    taskcommentstatetask_id = task_comment_state[m].task_id
                                    taskcommentstatematroshkaRevision = task_comment_state[m].matroshkaRevision
                                    taskcommentstatelast_read_id = task_comment_state[m].last_read_id
                                    taskcommentstatetype = task_comment_state[m].statetype
                                    taskcommentstateisTemporary = task_comment_state[m].isTemporary
                                    taskcommentstateunread_count = task_comment_state[m].unread_count
                        
                                    var taskcommentstateWrite = (
                                        taskcommentstatematroshkaRevision+","+
                                        taskcommentstaterequestID+","+
                                        taskcommentstatewasLocallyCreated+","+
                                        taskcommentstateid+","+
                                        taskcommentstatelistID+","+
                                        taskcommentstatetask_id+","+
                                        taskcommentstatelast_read_id+","+
                                        taskcommentstatetype+","+
                                        taskcommentstateisTemporary+","+
                                        taskcommentstateunread_count+"\n"
                                    )
                                    fs.appendFile('taskcommentstate.csv', taskcommentstateWrite, err=> {
                                        if(err) {
                                            console.error(err)
                                        }
                                    })
                                }
                        
                            }
                        });
                    } else {
                        //console.log("task_comment "+file)
                        fs.readFile("./Wunderlist/Wunderlist/"+file, "utf8", function(err, data) {
                            if(!err) {
                                var task_comment = JSON.parse(data)
                                var task_commentLength = task_comment.length
                                for(var m = 0; m < task_commentLength; m++) {
                                    taskcommentid = task_comment[m].id
                                    taskcommentmatroshkaRevision = task_comment[m].matroshkaRevision
                                    taskcommentauthorid = task_comment[m].author.id
                                    taskcommentauthorname = task_comment[m].author.name
                                    taskcommentauthoravatar = task_comment[m].author.avatar
                                    taskcommentcreated_at = task_comment[m].created_at
                                    taskcommentrevision = task_comment[m].revision
                                    taskcommenttype = task_comment[m].type
                                    taskcommenttask_id = task_comment[m].task_id
                                    taskcommentisTemporary = task_comment[m].isTemporary
                                    taskcommenttext = "\""+task_comment[m].text+"\""
                                    taskcommentrequestID = task_comment[m].requestID
                                    taskcommentwasLocallyCreated = task_comment[m].wasLocallyCreated
                                    taskcommentlocal_created_at = task_comment[m].local_created_at
                        
                                    var taskcommentWrite = (
                                        taskcommentid+","+
                                        taskcommentmatroshkaRevision+","+
                                        taskcommentauthorid+","+
                                        taskcommentauthorname+","+
                                        taskcommentauthoravatar+","+
                                        taskcommentcreated_at+","+
                                        taskcommentrevision+","+
                                        taskcommenttype+","+
                                        taskcommenttask_id+","+
                                        taskcommentisTemporary+","+
                                        taskcommenttext+","+
                                        taskcommentrequestID+","+
                                        taskcommentwasLocallyCreated+","+
                                        taskcommentlocal_created_at+"\n"
                                    )
                                    fs.appendFile('taskcomments.csv', taskcommentWrite, err=> {
                                        if(err) {
                                            console.error(err)
                                        }
                                    })
                                }
                        
                            }
                        });
                    }
                }
            } else {
                if (file.indexOf("subtask") != -1) {
                    console.log("subtask "+file)
                    fs.readFile("./Wunderlist/Wunderlist/"+file, "utf8", function(err, data) {
                        if(!err) {
                            var subtask = JSON.parse(data)
                            for(var n = 0; n < subtask.length; n++) {
                                subtaskid = subtask[n].id
                                subtaskcreated_by_id = subtask[n].created_by_id
                                subtaskcompleted_by_id = subtask[n].completed_by_id
                                subtaskmatroshkaRevision = subtask[n].matroshkaRevision
                                subtaskcreated_at = subtask[n].created_at
                                subtaskrevision = subtask[n].revision
                                subtaskcompleted = subtask[n].completed
                                subtasktype = subtask[n].type
                                subtasktitle = "\""+subtask[n].title+"\""
                                subtasktask_id = subtask[n].task_id
                                subtaskisTemporary = subtask[n].isTemporary
                                subtaskrequestID = subtask[n].requestID
                                subtaskwasLocallyCreated = subtask[n].wasLocallyCreated
                                subtaskcompleted_at = subtask[n].completed_at
                    
                                var subtaskWrite = (
                                    subtaskid+","+
                                    subtaskcreated_by_id+","+
                                    subtaskcompleted_by_id+","+
                                    subtaskmatroshkaRevision+","+
                                    subtaskcreated_at+","+
                                    subtaskrevision+","+
                                    subtaskcompleted+","+
                                    subtasktype+","+
                                    subtasktitle+","+
                                    subtasktask_id+","+
                                    subtaskisTemporary+","+
                                    subtaskrequestID+","+
                                    subtaskwasLocallyCreated+","+
                                    subtaskcompleted_at+"\n"
                                )
                                fs.appendFile('subtask.csv', subtaskWrite, err=> {
                                    if(err) {
                                        console.error(err)
                                    }
                                })
                            }
                        }
                    });
                } else {
                    if (file.indexOf("task") != -1) {
                        console.log("task "+file)
                        fs.readFile("./Wunderlist/Wunderlist/"+file, "utf8", function(err, data) {
                            if(!err) {
                                var task = JSON.parse(data)
                                var taskLength = task.length
                                for(var j = 0; j < taskLength; j++) {
                                    taskcompleted_at = task[j].completed_at
                                    taskdue_date = task[j].due_date
                                    taskrecurrence_count = task[j].recurrence_count
                                    tasktitle = "\""+task[j].title+"\""
                                    taskmatroshkaRevision = task[j].matroshkaRevision
                                    taskcreated_by_id = task[j].created_by_id
                                    tasklist_id = task[j].list_id
                                    taskcompleted = task[j].completed
                                    taskrequestID = task[j].requestID
                                    taskrevision = task[j].revision
                                    taskwasLocallyCreated = task[j].wasLocallyCreated
                                    taskisTemporary = task[j].isTemporary
                                    tasktype = task[j].type
                                    taskrecurrence_type = task[j].recurrence_type
                                    taskid = task[j].id
                                    taskstarred = task[j].starred
                                    taskcompleted_by_id = task[j].completed_by_id
                                    taskcreated_at = task[j].created_at
                                    taskassigner_id = task[j].assigner_id
                                    
                                    var taskWrite = (
                                        taskcompleted_at+","+
                                        taskdue_date+","+
                                        taskrecurrence_count+","+
                                        tasktitle+","+
                                        taskmatroshkaRevision+","+
                                        taskcreated_by_id+","+
                                        tasklist_id+","+
                                        taskcompleted+","+
                                        taskrequestID+","+
                                        taskrevision+","+
                                        taskwasLocallyCreated+","+
                                        taskisTemporary+","+
                                        tasktype+","+
                                        taskrecurrence_type+","+
                                        taskid+","+
                                        taskstarred+","+
                                        taskcompleted_by_id+","+
                                        taskcreated_at+","+
                                        taskassigner_id+"\n"
                                    )
                                    fs.appendFile('tasks.csv', taskWrite, err=> {
                                        if(err) {
                                            console.error(err)
                                        }
                                    })
                                }
                            }
                        });
                    }
                }
            }
        })
    }
})

