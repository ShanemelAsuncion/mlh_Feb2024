// Sample configuration file
// Rename this file to config.js and add your API keys
const CONFIG = {
    TINYMCE_API_KEY: 'your_tinymce_api_key_here',
    EMAILJS: {
        PUBLIC_KEY: 'your_emailjs_public_key_here',
        SERVICE_ID: 'your_emailjs_service_id_here',
        TEMPLATE_ID: 'your_emailjs_template_id_here'
    }
};

// Prevent reassignment of the configuration object
Object.freeze(CONFIG);
