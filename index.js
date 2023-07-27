const fs = require('fs');
const axios = require('axios');

let filteredAddresses = ''

async function processMetadata() {
    try{
        let resp = await axios.get('https://api.github.com/meta')
        let metadata = resp.data

        //only grab CIDR blocks from desired services
        filteredAddresses += metadata.hooks.join('\r\n')    + '\r\n'
        filteredAddresses += metadata.web.join('\r\n')      + '\r\n'
        filteredAddresses += metadata.api.join('\r\n')      + '\r\n'
        filteredAddresses += metadata.git.join('\r\n')      + '\r\n'
        filteredAddresses += metadata.packages.join('\r\n') + '\r\n'
        filteredAddresses += metadata.pages.join('\r\n')    + '\r\n'
        filteredAddresses += metadata.importer.join('\r\n') + '\r\n'
        filteredAddresses += metadata.web.join('\r\n')      + '\r\n'

        console.log(filteredAddresses)

    } catch (error) {
        console.log(error)
    }
    return ''
}

processMetadata();
