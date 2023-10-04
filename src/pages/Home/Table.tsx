const ROW = new Array(6).fill('')
const COL = new Array(5).fill('')

function Table() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="mx-auto flex h-[396px] w-[334px] flex-col gap-[5px] p-[10px]">
        {ROW.map((row, idx) => (
          <div className="flex flex-1 gap-[5px]" key={idx}>
            {COL.map((col, index) => (
              <span
                className="flex-1 border-2 border-[color:var(--color-tone-4)]"
                key={index}
              ></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Table
