module.exports = { 
    assertionTimeout: 30000,
    pageLoadTimeout: 30000,
    selectorTimeout: 30000,
    screenshots: {
        path: 'test-artifacts/screenshots',
        pathPattern: '${FIXTURE}/${TEST}_${TIME}',
        takeOnFails: true
    },
    videoOptions: {
        pathPattern: '${FIXTURE}/${TEST}_${TIME}',
        singleFile: false,
        failedOnly: true
    },
    videoPath: 'test-artifacts/videos',
}