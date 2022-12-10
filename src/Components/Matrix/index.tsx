import React, { useEffect, useLayoutEffect, useState } from 'react';
import './index.css';

const BLOCK_SIZE = 40 //px
const SPAWN_INTERVAL = 10000 //ms

const MIN_DURATION = 1100 //ms
const MAX_DURATION = 4400 //ms

const MIN_DELAY = 0 // ms
const MAX_DELAY = 9000 // ms


const colors = [
  "color1",
  "color2",
  "color3",
  "color4"
]

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

interface coordinate {
  x: number
  y: number
}
interface Block {
  key: string
  coordinates: coordinate
}

const getBlock = (width: number, height: number) => {

  const width_blocks = Math.floor(width / BLOCK_SIZE)
  const height_blocks = Math.floor(height / BLOCK_SIZE)

  let x = getRandomInt(0, width_blocks) * BLOCK_SIZE
  let y = getRandomInt(0, height_blocks) * BLOCK_SIZE
  let block = {
    key: x + '-' + y,
    coordinates: {
      x: x,
      y: y
    }
  }

  return block
}

const getBlocks = (blocks: number, width: number, height: number) => {
  let block: number = 0
  let generated_blocks: Block[] = []
  for (; block < blocks; block++) {
    const new_block = getBlock(width, height)
    if (generated_blocks.findIndex(x => x.key === new_block.key) !== -1) {
      block--
      continue
    }
    generated_blocks.push(new_block)
  }
  return generated_blocks
}

type MatrixBlockProps = {
  x: number,
  y: number,
  onDeath: (() => any)
}

const MatrixBlock = ({
  x,
  y,
  onDeath
}: MatrixBlockProps): JSX.Element => {

  const delay = getRandomInt(MIN_DELAY, MAX_DELAY)
  const duration = getRandomInt(MIN_DURATION, MAX_DURATION)
  const color = colors[getRandomInt(0, colors.length)]

  useEffect(() => {
    const timeout = setTimeout(() => {
      onDeath()
    }, duration + delay + 6000);
    return () => clearTimeout(timeout);
  }, [duration, delay, onDeath]);

  return (
    <div
      className={`matrix-block ${color}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${BLOCK_SIZE}px`,
        height: `${BLOCK_SIZE}px`,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}>
      {Math.random() < 0.5 ? 0 : 1}
    </div>
  )
}

const Matrix = (): JSX.Element => {

  const [width, height] = useWindowSize();
  const [blocks, setBlocks] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (width <= 0 || height <= 0)
      return
    setBlocks([])
  }, [width, height])

  useEffect(() => {
    if (width <= 0 || height <= 0)
      return

    const spawnBlocks = () => {      
      setBlocks(
        blocks => {
          let new_blocks = getBlocks(80, width, height)
          new_blocks = new_blocks
            .filter(new_block =>
              blocks.findIndex(block =>
                block.key === new_block.key)
              ===
              -1)

          return [
            ...blocks,
            ...new_blocks.map(block =>
              <MatrixBlock
                x={block.coordinates.x}
                y={block.coordinates.y}
                key={block.key}
                onDeath={() => {
                  setBlocks(blocks =>
                    blocks.filter(block => block.key !== block.key)
                  )
                }} />)
          ]
        }
      )
    }
    spawnBlocks()
    const interval = setInterval(spawnBlocks, SPAWN_INTERVAL);
    return () => clearInterval(interval);
  }, [width, height]);

  return (
    <div className='matrix'>
      {blocks}
    </div>
  );
}

export default Matrix;




