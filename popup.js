console.log("This is popup js")
const backupBtn = document.querySelector('#backup')
backupBtn.addEventListener('click', async () => {
    let backupObj = await chrome.windows.getAll()
    console.log(backupObj)
    for (let i = 0; i < backupObj.length; i++){
        let window = backupObj[i]
        let windowTabs = await chrome.tabs.query({windowId: window.id})
        backupObj[i]["tabs"] = windowTabs
    }
    let text = JSON.stringify(backupObj)
    var blob = new Blob([text],{type:"text/json;charset=utf-8"})
    saveAs(blob, "chrome-backup.json")
    console.log("Windows with tabs")
    console.log(backupObj)
    console.log("done")
    doExportToDisk()
})