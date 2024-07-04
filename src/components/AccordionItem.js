import React,{useState} from 'react'
const calcAge = (dob) =>{

    const birthdate = new Date(dob);
    const today = new Date();
    let age= today.getFullYear()- birthdate.getFullYear();
    const monthdiff=today.getMonth()-birthdate.getMonth();
    if(monthdiff<0 || (monthdiff===0 &&today.getDate()<birthdate.getDate()))
        {
            age--;
        }
    return age;
}

    function AccordionItem({ celebrity ,isOpe ,onToggle, onUpdate,onDelete,onEditMode })
    {
        const [isEditing,setIsEditing] = useState(false);
        const [formData, setformData] = useState({
            name:celebrity.name,
            gender:celebrity.gender,
            country:celebrity.country,
            description:celebrity.description,
            age:calcAge(celebrity.dob),
        });

        const handleChange = (e) =>
            {
                const {name,value} = e.target;
                setformData((prev) => ({...prev,[name]:value}));
            }
        const handleEditClick = () =>
            {
                setIsEditing(true);
                onEditMode(true);

            }
        const handleSaveClick=() =>{
            setIsEditing(false);
            onEditMode(true);
        }
        
        const handleCancelClick=() =>{
           setIsEditing(false);
           setformData({
            name:celebrity.name,
            email:celebrity.email,
            age:celebrity.age,
            gender:celebrity.gender,
            country:celebrity.country,
            description:celebrity.description,
            age:calcAge(celebrity.dob),
           })
          onEditMode(false);
        }

       const handleDeleteClick = () =>{
        if(window.confirm('Are you sure you want to delete the celebrity')){
            onDelete(celebrity.id);
        }
       }

       const age=calcAge(celebrity.dob);
       const isAdult=age>=18;
       const hasChanges = JSON.stringify(celebrity)!==JSON.stringify(formData)


       return (
        <div className='accordion-item'>
            <div className='accordion-header' onClick={onToggle}>
                <img src={celebrity.picture} alt={`${celebrity.first} ${celebrity.last}`}/>
                <div>{celebrity.first} {celebrity.last} ({age} years old)</div>
                <div>{isOpe ? '-' : '+'}</div>

            </div>
            {isOpe && (
                <div className='accordion-content'>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={celebrity.email} onChange={handleChange} disabled={!isEditing}/>
                    </div>
                
                <div>
                <div>
                <label>Age: </label>
                <input type="text" name="age" value={formData.age} onChange={handleChange} disabled={!isEditing}/>
                </div>
                <label>Gender: </label>
                <select name="gender" value={formData.gender} onChange={handleChange} disabled={!isEditing}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                    <option value="rather not say">Rather not say</option>
                    <option value="others">Others</option>
                </select>
                </div>
                <div>
                <label>Country: </label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} disabled={!isEditing}/>
                </div>
                <div>
                <label>Description: </label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} disabled={!isEditing} />
                </div>
                {isAdult &&(
                <div>
                    {isEditing ? ( 
                        <>
                            <button onClick={handleSaveClick}>Submit</button>
                            <button onClick={handleCancelClick}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleEditClick}>Edit</button>
                            <button onClick={handleDeleteClick}>Delete</button>
                        </>
                    )}

                </div>
                )}
            </div>
            )}
        </div>
       )
    }
 

export default AccordionItem;