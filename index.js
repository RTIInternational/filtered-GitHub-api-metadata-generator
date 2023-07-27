const fs = require('fs');
const axios = require('axios');

let filteredAddresses = ''

async function processMetadata() {
    try{
        let resp = await axios.get('https://api.github.com/meta')
        let metadata = resp.data

        //only grab CIDR blocks from desired services
        filteredAddresses += metadata.hooks.join('\n')    + '\n'
        filteredAddresses += metadata.web.join('\n')      + '\n'
        filteredAddresses += metadata.api.join('\n')      + '\n'
        filteredAddresses += metadata.git.join('\n')      + '\n'
        filteredAddresses += metadata.packages.join('\n') + '\n'
        filteredAddresses += metadata.pages.join('\n')    + '\n'
        filteredAddresses += metadata.importer.join('\n') + '\n'
        filteredAddresses += metadata.web.join('\n')      + '\n'

        console.log(filteredAddresses)

    } catch (error) {
        console.log(error)
    }
    return ''
}

processMetadata();
