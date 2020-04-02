import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setBlocks } from "../redux/actions";


const S = {}

S.Container = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.gridTemplate}; 
    grid-template-rows: ${(props) => props.gridTemplate}; 
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition-property: all;
    transition-duration: 0.5s
`

S.Block = styled.div`
    background-color: ${(props) => props.color};
    box-sizing: border-box;
    grid-column: ${(props) => props.startingCol};
    grid-row: ${(props) => props.startingRow};
    transition-property: all;
    transition-duration: 0.5s
`












function Pattern1(props) {


    const [blocksCreated, setBlocksCreated] = useState(false)
    
    // Creates a 3x3 grid of blocks with alternating colors
    let color = "red"
    let blox = []
    let gridSize = 7;
    if (!blocksCreated){
        for (let startingRow = 1; startingRow < gridSize + 1; startingRow++){
            for (let startingCol = 1; startingCol < gridSize + 1; startingCol++){
                blox.push({
                    startingRow: startingRow,
                    startingCol: startingCol,
                    color: color,
                })
        
        
                if (color === "black"){
                    color = "white"
                } else {
                    color = "black"
                }

                // Once grid blocks are generated, set them to state
                if (startingCol === gridSize && startingRow === gridSize){
                    props.setBlocks(blox)
                    setBlocksCreated(true)
                }
            }
        }
    }

    
    const rotateBlocks = () => {
        let blocksCopy = [...props.blocks];
        blocksCopy.forEach((block, i) => {
            let newRow = block.startingCol
            let newCol = gridSize - block.startingRow + 1

            block.startingRow = newRow;
            block.startingCol = newCol;

            if (i === blocksCopy.length - 1){
                props.setBlocks(blocksCopy)
            }
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            rotateBlocks();
        }, 1000);
        return () => clearInterval(interval);
    }, [props.blocks]);





    const setGridTemplate = () => {
        let frString = ""
        for (let i = 0; i < gridSize; i++){
            if(i === gridSize - 1){
                frString += "1fr"
            } else {
                frString += "1fr "
            }
        }
        return frString
    }
    const gridTemplate = setGridTemplate()

    return (
        <S.Container gridTemplate = {gridTemplate}>
            {
                props.blocks.map((block) => {
                    return (
                        <S.Block 
                            startingCol = {block.startingCol}
                            startingRow = {block.startingRow}
                            color = {block.color}
                        />
                    )
                })
            }
        </S.Container>
    )
}

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks
    }
  }
  
export default connect(mapStateToProps, {setBlocks})(Pattern1);