import React, { useEffect, useLayoutEffect, useState } from 'react';
import './index.css';

const BLOCK_SIZE = 40 //px
const SPAWN_INTERVAL = 100 //ms

const MIN_DURATION = 1100 //ms
const MAX_DURATION = 2400 //ms

const MIN_DELAY = 0 // ms
const MAX_DELAY = 1500 // ms


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


const getBlock = (width: number, height: number) => {

  const width_blocks = Math.floor(width / BLOCK_SIZE)
  const height_blocks = Math.floor(height / BLOCK_SIZE)

  let new_block_coordinates = [
    getRandomInt(0, width_blocks) * BLOCK_SIZE,
    getRandomInt(0, height_blocks) * BLOCK_SIZE
  ]

  return new_block_coordinates
}

type MatrixBlockProps = {
  x: number,
  y: number,
  first: boolean,
  onDeath: (() => any)
}

const MatrixBlock = ({
  x,
  y,
  first,
  onDeath
}: MatrixBlockProps): JSX.Element => {


  const duration = getRandomInt(MIN_DURATION, MAX_DURATION)
  const delay = getRandomInt(MIN_DELAY, MAX_DELAY)

  const color = colors[getRandomInt(0, colors.length)]

  useEffect(() => {
    const timeout = setTimeout(() => {
      onDeath()
    }, duration + delay);
    return () => clearTimeout(timeout);
  }, [duration, delay, onDeath]);

  return (
    <div
      className={`matrix-block ${color} ${first ? 'first' : ''}`}
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
  const [first, setFirst] = useState(true)

  useEffect(() => {
    setBlocks([])
  }, [width, height])

  useEffect(() => {
    const clearFirst = () => {
      setFirst(false)
    }
    const timeout = setTimeout(clearFirst, SPAWN_INTERVAL)
    return () => {
      clearTimeout(timeout)
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {

      setBlocks(
        blocks => {
          const new_block = getBlock(width, height)
          const new_block_key = new_block.toString()

          const in_blocks = blocks.findIndex(block => {
            return block.key === new_block_key
          })

          if (in_blocks >= 0)
            return blocks

          return [
            ...blocks,
            <MatrixBlock
              x={new_block[0]}
              y={new_block[1]}
              key={new_block.toString()}
              first={first}
              onDeath={() => {
                setBlocks(blocks =>
                  blocks.filter(block => block.key !== new_block_key)
                )
              }} />
          ]
        }
      )
    }, SPAWN_INTERVAL);
    return () => clearInterval(interval);
  }, [width, height, first]);

  return (
    <div className='matrix'>
      {blocks}
    </div>
  );
}

export default Matrix;




