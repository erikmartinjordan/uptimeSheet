## uptimeSheet

Get the uptime of your website using Google Spreadsheets. [Here](https://docs.google.com/spreadsheets/d/1fn-LJUxVf7PtOleh1SFKe_Zn9_w23qcjKANDtnEhx0s/edit?usp=sharing) is an example monitoring two websites.

![uptimeSheet](https://github.com/erikmartinjordan/uptimeSheet/blob/master/uptimeSheet.png)

## How to use it

1. Create a new Google Spreadhseet
2. `Tools > Script editor`
3. Copy **`uptime.gs`** in the editor
4. Replace `Sheet1` and `URL1`:
    - `Sheet1`: Name of the sheet to record data
    - `URL`: URL to monitor
5. From the script window: `Edit > Current project's triggers`
6. Add a time trigger for the script (minute, hour, day)

The script will fill a sheet with two columns: date of execution and website status (1 and 0). 

## Author

[Erik Martín](https://erikmartinjordan.com)

## License

This project is open source and available under the MIT License.