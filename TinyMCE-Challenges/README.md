# TinyMCE Email Editor

A modern email editor built with TinyMCE that provides a rich text editing experience with secure API key management.

## Setup

1. **Configuration**
   - Copy `config.sample.js` to `config.js`
   - Update `config.js` with your API keys:
     ```javascript
     const CONFIG = {
         TINYMCE_API_KEY: 'your_tinymce_api_key_here',
         EMAILJS: {
             PUBLIC_KEY: 'your_emailjs_public_key_here',
             SERVICE_ID: 'your_emailjs_service_id_here',
             TEMPLATE_ID: 'your_emailjs_template_id_here'
         }
     };
     ```

2. **EmailJS Setup**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an Email Service (Gmail, Outlook, etc.)
   - Create an Email Template with these variables:
     - `{{to_email}}`
     - `{{subject}}`
     - `{{message}}`
   - Copy your Public Key, Service ID, and Template ID to `config.js`

3. **TinyMCE Setup**
   - Get your API key from [TinyMCE](https://www.tiny.cloud/)
   - Add it to `config.js`

## Security Notes

- Never commit `config.js` to version control
- The file is already added to `.gitignore`
- Keep your API keys secure and never share them
- Use environment variables for production deployment

## Features

- Rich text editing with TinyMCE
- Email templates with dynamic placeholders
- Secure API key management
- Cross-client compatible email styling
- Email sending via EmailJS

## Development

1. Start a local server:
   ```bash
   python -m http.server 8000
   ```
2. Open http://localhost:8000 in your browser
3. Select a template and start editing

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Create a pull request

## License

MIT License