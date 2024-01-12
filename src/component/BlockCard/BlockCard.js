import React, { useState, useEffect } from "react";

export default function BlockCard(props) {
    const [isSelected, setIsSelected] = useState(false);

    const addValueToCategory = (value) => {
        const existingValue = props.categoriesList.filter(
            (category) => category === value
        );

        if (!existingValue.length) {
            props.setCategories([...props.categoriesList, value]);
        } else {
            const newCategoryList = props.categoriesList.filter(
                (category) => category !== value
            );
            props.setCategories(newCategoryList);
        }
    };

    useEffect(() => {
        const isExists =
            props.categoriesList.includes(props.genreDetails.id) === true;
        setIsSelected(isExists);
    });

    return (
        <div
            onClick={() => {
                addValueToCategory(props.genreDetails.id);
                setIsSelected(!isSelected);
            }}
            style={{
                background: props.genreDetails["color"],
                color: "white",
                padding: "16px",
                borderRadius: "12px",
                border: `${isSelected ? "4px solid green" : "4px solid white"}`,
            }}
            key={props.key}
        >
            <p style={{ marginBottom: "4px", fontSize: "18px" }}>
                {props.genreDetails.id}
            </p>
            {props.genreDetails.image}
        </div>
    );
}
