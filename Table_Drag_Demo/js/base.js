function main() {
    const option = {
        cols: [
            { title: 'ID', key: 'index', width: 0.1 },
            { title: '姓名', key: 'name', width: 0.45 },
            { title: '年龄', key: 'age', width: 0.45 },
        ],
        draggable: true,
        dragEndCallback(dataList, handleInitialIndex, targetRealTimeIndex, handleRealTimeIndex) {
            const list = [...dataList]
            const handleItemData = list[handleInitialIndex]
            list.splice(handleInitialIndex, 1)
            list.splice(targetRealTimeIndex, 0, handleItemData)
            table.updateTableContent(list)
        }
    }
    const table = new Table(document.getElementById('appContainer'), option)
    const list = []
    for (let i = 0; i < 20; i++) {
        list.push({ $id: i, $draggable: true, index: i, name: `name ${i}`, age: 10 + i })
    }
    table.updateTableContent(list)
}
main()