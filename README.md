# Dropdown
Custom Dropdown having single and multi select functionality

## Demo
[Click me --:](http://saeed3e.github.io/dropdown/)

-------------------------------------------------------

## Browser Support
* Internet Explorer 8+
* Chrome 10+
* Firefox 3.5+
* Safari 4+
* Opera 11+

-------------------------------------------------------

## Size
* Minified: 24.16 KB
* Gzip: 7.71 KB

-------------------------------------------------------


## Features


-------------------------------------------------------


# Usage

### HTML

```HTML
<div id="single" class="ddwn sng">
    <div class="DDwrap">
        <div class="DDsearch">
            <span class="arw"></span>
            <div class="DDinputWrap">
                <input type="text" class="srchTxt" placeholder="Type here" />
            </div>
        </div>
    </div>
</div>
```

### JSON Data format
```javascript

Single Dimension

var JSONdata = { "1a":"India", "2a":"Australia", "3a":"United State", "4a":"Zymbombay", "5a":"Saudi Arabia" };

MultiDimension Data (optGroup Case):

var dataJson = {
                Country : { "1":"Afghanistan & india" , "2":"Albania" , "3":"Algeria" , "4":"zymbombay" },
                State   : { "5a":"United & india" , "6a":"Albania" , "7a":"agra" , "8a":"United Kingdom"},
                Distict : { "13":"Pakistan & india" , "14":"Albania" , "15":"Algeria" , "16":"United Kingdom"},
                City    : { "17a":"Saudi Arabia & india" , "18a":"Albania" , "19a":"Algeria"}
            }
```


### Call

```javascript
var params = {
	id : "single",  // should be id of dropdown main container
	data : JSONdata 
    };
    new DD(params);
```

### Parameters (Options)


Name  | Type | Default Value | Discription
--- |--- | --- | ---
allChk    | Boolean | false |   -   A super parent named All wil be at the top of all DD values.
      |         |       |       o   Check ALL(super parent ) will check all parent and children below ALL.
      |     |       |       o   Uncheck ALL(super parent ) will uncheck all parent and children below ALL.
appendTags | | | 
id  | string | none | A unique id for suggestor 
clearAllInside | Boolean | false |    {'Text':'ClearAll'}
clearTagId  | String |  Element Id from which you want to clear the dropdown selected values
deselect | method | none | to make automatic deselection
isSearch | | |
maxTagsCount | Integer | 999 
maxHeight | Integer|  300 | set the dropdown maximum height
noDataTxt | String | No data found in search |   Text which is shown when no data will be found in search
               |     |      |   - Check parent will check all children.
               |     |  |   - Uncheck parent will uncheck children.
               |     |  |   - check all children will check parent.
onTagCreate | function  | function(){} (It's a callback function which is call when a tag create checkBox | true / false (default : false) | To enable/disable checkbox for "Multiple Select" / "Single Select" case
onClickReq |function | none | function(obj,key,sts,tagElement){} (It's a callback function which is call when user is selected any value)
onTagClick |function| none | function(obj){} (It's a callback function which is call when user click on tag cross sign)
preText | String  | "You have selected" |  it's a pretext which is show when you select any value from dropdown in "tagInSeparate" container case
parentChkBox   | Boolean | false | You can have parent- child relationship with functionalities as.
postText | String | "item(s)" |  it's a posttext which is show when you select any value from dropdown in "tagInSeparate" container case
postPlaceholder | | |
preventClickFor | | |
prefillData | | |
parentChkBox | | |
searchBox | Boolean| true | Enable or disable dropdown search box
select | method | none | to make automatic Selection
sortPrefix | | |
tagwithOptGroup | Boolean|  false| If you want to creat tags with optgroup text
tagInSepContainer | String | none | Continer id in which you want to show dropdonw tags (note- Valid only for multiple select)
tagTitle | | |
tags  | Boolean | true | To enable/disable tags for "Multiple Select" case
tagsSorting | Boolean|  true | In multiple select dropdowns(specially in prefill case) when tags are created on prefill basis it automaitcally sorted to stop this behaviour, specify "false" parameter


## Methods

#### addData()

  instance.addData({'data':{"saeed":"saeedkhan"}, 'status':"Checked",prefillData:[2.2,4.1]});


#### select()
    For Single Selection
    instance.select({'key':'2'});
    
    For multiple Selection
    instance.select({'key':[2,4]});

#### deselect()
    For Single Selection
    instance.deselect({'key':'2.2'});
    
    For multiple Selection
    instance.deselect({'key':[2.2,4.1]});

#### onChange()

#### replaceData()

#### onTagCreate()

#### onTagClick()

#### onClickReq()

#### destroy()

#### onTagCrt()
#### onTagClk()
#### onDeselect()
#### onClickLi()
#### onClearTag()

### Author
   [Mohd Saeed Khan](http://www.saeed3e.com)

### Contributer
    Nitin
    Sakshi
    Mahima