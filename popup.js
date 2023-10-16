console.log("This is popup js")
const backupBtn = document.querySelector('#backup')
backupBtn.addEventListener('click', async () => {
    let windows = await chrome.windows.getAll()
    console.log(windows)
    for (let i = 0; i < windows.length; i++){
        let window = windows[i]
        let windowTabs = await chrome.tabs.query({windowId: window.id})
        windows[i]["tabs"] = windowTabs
    }
    console.log("Windows with tabs")
    console.log(windows)
    console.log("done")
})