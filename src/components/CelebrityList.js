import React, {useState ,useEffect} from 'react';
import Accordion from './AccordionItem'

function CelebrityList({celeb,onUpdate,onDelete})
    {
        const [activeId,setactiveId]=useState(null);
        const [isEditing,setIsEditing] = useState(false);

        

        const handleToggle = (id) =>{
            if(isEditing)
                {
                    return;
                }
            setactiveId((prevId)=> (prevId===id? null:id));
        }
        const handleEditMode = (editing) =>{
            setIsEditing(editing);
        }

        return (
            <div>
                {celeb.map((celebrity)=>(
                    <Accordion Key={celebrity.id}
                    celebrity={celebrity}
                    isOpe={celebrity.id===activeId}
                    onToggle={() => handleToggle(celebrity.id)}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    onEditMode={handleEditMode}
                                       
                    />
                ))}
            </div>
        )

    }

export default CelebrityList;