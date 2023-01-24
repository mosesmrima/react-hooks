import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {UseEffect} from "../hooks/UseEffect.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/UseEffect">
                <UseEffect/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;