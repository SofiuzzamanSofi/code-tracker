
const addBreakTime = (breakTime) => {
    const isExist = localStorage.setItem('breake-time', breakTime)


}

const exportAddBreakTime = () => {
    const outputExist = localStorage.getItem('breake-time');
    return outputExist;
}

export { addBreakTime, exportAddBreakTime }