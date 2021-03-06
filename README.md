## uptimeSheet

Get your website's uptime using Google Spreadsheets. [Here](https://docs.google.com/spreadsheets/d/1fn-LJUxVf7PtOleh1SFKe_Zn9_w23qcjKANDtnEhx0s/edit?usp=sharing) is an example monitoring two websites.

![uptimeSheet](https://github.com/erikmartinjordan/uptimeSheet/blob/master/uptimeSheet.png)

## How to use it

1. Create a new Google Spreadhseet
2. `Tools > Script editor`
3. Copy **`uptime.gs`** in the editor
4. Replace `SheetNames`, `uptimeURLs` and `yourEmail`:
    - `SheetNames`: Sheets to record data (1 sheet for each website)
    - `uptimeURLs`: URLs to monitor
    - `yourEmail`: Email to get notified if errors
5. From the script window: `Edit > Current project's triggers`
6. Add a time trigger for the script (minute, hour, day)

The script will fill a sheet with two columns: date of execution and website status (1 or 0). 

## Author

[Erik Martín Jordán](https://erikmartinjordan.com)

## License

This project is open source and available under the MIT License.
