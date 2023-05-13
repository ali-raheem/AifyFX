# AifyFX

Use AI to write and edit text with OpenAI's models including GPT-4.

You must have API key for OpenAI (anyone can access GPT-3.5-turbo). But then you can use any model you have access to including finetuned ones.

Aify comes with plenty of stock prompts, which you can add to, delete or customize as you need.

## Screenshots


## Configuration and Usage

### Configuration

1. Set an API key below (obtainable from OpenAI).
2. (Optional) Once you've set an API key you can click Update Models to get the current list.
3. **Make sure you have access to the selected model (anyone can use gpt-3.5-turbo).**
4. (Optional) Add, remove or edit the available actions.
5. **Make sure to click save button to store settings.**

### Usage

1. Open a new compose window (Write, Reply or Forward).
2. Highlight some text to act one.
3. Click the Aify icon in the top right (near the lightbulb) and pick an action.
4. A popup will open and await the response from the API. This may take time at periods of high load.
5. (Optional) Click `Regenerate` to get a new response.

## Tips and Tricks

You can add, edit and remove prompts from the `settings` page.

`gpt-3.5-turbo` is faster and cheaper than `gpt-4`, but not as "smart".

The prompt name (text box) is what is shown in the Aify context menu, and the prompt itself (the textarea) is prepended to the highlighted text separated by newline --- newline which makes it easy for the model to see whats what but isn't harmful if the prompt is empty.

## Building

The contents of `plugin/` should be zipped into a file ending `.xpi`.

```
cd plugin
zip -r ../aify.xpi *
```

## Todo


## Privacy and Data Retention

This add-on interfaces with OpenAI's API but collects no data itself other than settings stored locally.
The text is sent to OpenAI's server and managed by their data retention policy.

- OpenAI's privacy policy can be found at https://openai.com/policies/privacy-policy
- OpenAI's API data usage policy is here https://openai.com/policies/api-data-usage-policies

## License

GPLv3

## Icons
### UXWing.com
Licensing terms - https://uxwing.com/license
- loading-*px.png - https://uxwing.com/loader-line-icon
- icon*.png - https://uxwing.com/invention-icon

