# Druthers
A customized "Dropdown, Choosen, Picker or Selector"  having single and multi select functionality with/without tags

## Demo
[Click me --:](http://saeed3e.github.io/druthers/)

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
* Single Select 
* Multiple Select
* Searchable data with on/off feature.
* Prefill/Preselected data for single and multiple select cases
* Tags formation
* Tags can be created inside or outside(separate/different) of druthers
* Can also used to represend data in list form.
* Dependent feature for "single/multiple select" (e.g. DruthersA is depended to DruthersB and DruthersB is depended to DruthersC up to 'N' level.)

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

For Single/MultiSelect Select

var JSONdata = { "1a":"India", "2a":"Australia", "3a":"United State", "4a":"Zymbombay", "5a":"Saudi Arabia" };

For OptGroup/Category/Parent-Child Case:

var dataJson = {
                Country : { "1":"India" , "2":"Albania" , "3":"Algeria" , "4":"America" },
                State   : { "5a":"Delhi" , "6a":"Uttar Paradesh" , "7a":"GOA" , "8a":"United Kingdom"},
                Distict : { "13":"Kanpur" , "14":"Lucknow" , "15":"Bareiily" , "16":"Moradabad"},
                City    : { "17a":"Shahjahanpur" , "18a":"Bareilly" , "19a":"Lucknow"}
            }
```


### Call

```javascript
var params = {
    id : "single",  // should be id of druthers main container
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
appendTags | boolean | false | By default tags inserted in prepend manner to reverse it, set true. 
id  | string | none | A unique id for suggestor 
clearAllInside | Boolean | false |    {'Text':'ClearAll'}
clearTagId  | String | none  | Node Id, to clear the druthers selected values
isSearch | boolean| true | to enable/disable search
maxTagsCount | Integer | 999 | to limit number of tags creation.
maxHeight | Integer|  300 | To set druthers max height
noDataTxt | String | No data found in search |   Text which is shown when no data will be found in search
               |     |      |   - Check parent will check all children.
               |     |  |   - Uncheck parent will uncheck children.
               |     |  |   - check all children will check parent. 
checkBox | true / false (default : false) | To enable/disable checkbox for "Multiple Select" / "Single Select" case
preText | String  | "You have selected" |  to show pretext when selection made from druthers in "tagInSeparate" container case
postText | String | "item(s)" |  to show posttext when selection made from druthers in "tagInSeparate" container case
parentChkBox   | Boolean | false | After enable this option parent/optgroup tuple become selectable and if user select any optgroup then all it's children automatically selected.
postPlaceholder | string | none | In multiselect druthers to replace default placeholder with postPlaceholder when input box become squeeze.
preventClickFor | | |
prefillData | Array/string/integer | none | To pre-selected data in druthers passed key(s) in Array.
searchBox | Boolean| true | To Enable or disable search box
sortPrefix | string | none | if JSON data having numeric keys and to prevent JSON data sorting having numberic keys, add any string against each key in JSON data anad specify the same prefix string in this parameter [reference](http://stackoverflow.com/questions/3186770/chrome-re-ordering-object-keys-if-numerics-is-that-normal-expected)
tagwithOptGroup | Boolean|  false| If you want to creat tags with optgroup text
tagInSepContainer | String | none | Continer id in which you want to show dropdonw tags (note- Valid only for multiple select)
tagTitle | Boolean | false | To enable title text on tags
tags  | Boolean | true | To enable/disable tags for "Multiple Select" case
tagsSorting | Boolean|  true | In multiple select druthers(specially in prefill case) to prevent automatically tags sorting


## Methods

#### addData()

  instance.addData({'data':{"saeed":"saeedkhan"}, 'status':"Checked",prefillData:[2.2,4.1]});


#### destroy()
    To destroy dropdown call 
    instance.destroy();

#### select()
    #####to make automatic Selection

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
     This callback fire only when a value change in dropdown

#### onDeselect()
     It's fire only when a value has been deselected

#### onTagCreate()
    It's a callback function which is call when tag is created

#### onTagClick()
     It's a callback function which is call when user click on tag

#### onClickReq()
     It's a callback function which is call when user is selected any value either by mouse/touce

#### onClearTag()
     Call back function for click on clearTag/clearAllTsg

#### replaceData()
     This function is to replace all data from new one.


### Author
   [Mohd Saeed Khan](http://www.saeed3e.com)

### Contributer
    Nitin
    Sakshi
    Mahima

Copyright (c) 2015-Mohd Saeed Khan. See LICENSE for details.
