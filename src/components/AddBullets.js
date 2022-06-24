import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import {addBullet} from '../data/fauna-queries.js';

const AddBullets = ({bullets_details}) =>{
    
    const [bulletData, setBulletData] = useState({ 
        date_purchased: "",
        make: "",
        calibre: "",
        model: "",
        grain: 0,
        price: 0,
        unit_per_box: 0,
        price_per_unit: 0,
        available: 0,
        used: 0,
    });

    var newBulletData = {...bulletData};

    function handleAddBullet(e){        
        e.preventDefault();
        addBullet(bulletData);
    }

    function handleFormChange(key, isInt, e){     
        newBulletData = {...bulletData};  
        newBulletData[key] = isInt ? parseInt(e.target.value): e.target.value;
        setBulletData(bulletData => ({...newBulletData}));
    }

    return(
        <div className="formAddContainer">
            <h3> Add Bullet</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Date puchased</Form.Label>
                    <Form.Control 
                        required 
                        value={bulletData.date_purchased} 
                        onChange={(e) => handleFormChange("date_purchased", false, e)}
                        type="text" 
                        placeholder="Enter the date of the purchase" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Make</Form.Label>
                    <Form.Select 
                        value={bulletData.make}
                        onChange={(e) => handleFormChange("make", false, e)}
                        >
                        {bullets_details?.makes?.map((make) => 
                            (<option key={make}>
                                {make}
                            </option>)
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Calibre</Form.Label>
                    <Form.Select 
                        value={bulletData.calibre} 
                        onChange={(e) => handleFormChange("calibre", false, e)}
                    >
                        {bullets_details?.calibres?.map((calibre) => 
                            (<option key={calibre}>
                                {calibre}
                            </option>)
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Select 
                        value={bulletData.model}                        
                        onChange={(e) => handleFormChange("model", false, e)}
                    >
                        {bullets_details?.models?.map((model) => 
                            (<option key={model}>
                                {model}
                            </option>)
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Grain</Form.Label>
                    <Form.Control 
                        required 
                        value={bulletData.grain} 
                        onChange={(e) => handleFormChange("grain", true, e)}
                        type="number" 
                        placeholder="Enter grain value" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        required 
                        value={bulletData.price}   
                        onChange={(e) => handleFormChange("price", true, e)}
                        type="number" 
                        placeholder="Enter price value" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Unit per box</Form.Label>
                    <Form.Control required 
                        value={bulletData.unit_per_box}  
                        onChange={(e) => handleFormChange("unit_per_box", true, e)}
                        type="number" 
                        placeholder="How many units per box" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Number Available</Form.Label>
                    <Form.Control 
                        required 
                        value={bulletData.available} 
                        onChange={(e) => handleFormChange("available", true, e)}
                        type="number" 
                        placeholder="How many available" />
                </Form.Group>


                <Button variant="primary" type="submit" onClick={(e) => handleAddBullet(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddBullets;