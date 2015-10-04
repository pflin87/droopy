# DroopeJS

DroopeJS/droope is a customized dropdown plugin with support of searching, tagging, single/multi select functionality and also definde dependent droope.

## Demo
[Try me out:](http://saeed3e.github.io/droope/)

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
* Tags can be created inside or outside(separate/different) of droope
* Can also used to represend data in list form.
* Dependent feature for "single/multiple select" (e.g. droope A is depended to droope B and droope B is depended to droope C up to 'N' level.)

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

For Single/MultiSelect:
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
    id : "single",  // should be id of droope main container
    data : JSONdata 
};
new DD(params);
```

### Parameters (Options)


Name  | Type | Default Value | Discription
--- |--- | --- | ---
allChk    | Boolean | false |
appendTags | boolean | false | By default tags inserted in prepend manner, to reverse it set true. 
id  | string | none | droope main container Id.
clearAllInside | Boolean | false |    {'Text':'ClearAll'}
clearTagId  | String | none  | Node Id, to clear the droope selected values
isSearch | boolean| true | to enable/disable search
maxTagsCount | Integer | 999 | to limit number of tags creation.
maxHeight | Integer|  300 | To set droope max height
noDataTxt | String | "No data found in search" |   Text which is shown when no data will be found in search
checkBox | boolean | false | to switch in singleSelect/multiSelect mode.
preText | String  | "You have selected" |  to show pretext when selection made from droope in "tagInSeparate" container case
postText | String | "item(s)" |  to show posttext when selection made from droope in "tagInSeparate" container case
parentChkBox   | Boolean | false | After enable this option parent/optgroup tuple become selectable and if user select any optgroup then all it's children automatically selected.
postPlaceholder | string | none | In multiselect droope to replace default placeholder with postPlaceholder when input box become squeeze.
preventClickFor | | |
prefillData | Array/string/integer | none | to pre-selected data in droope passed key(s) in Array/string/integer form.
searchBox | Boolean| true | to enable or disable search box
sortPrefix | string | none | if JSON data having numeric keys and to prevent JSON data sorting, add any string against each key in JSON data and specify the same prefix string in this parameter [reference](http://stackoverflow.com/questions/3186770/chrome-re-ordering-object-keys-if-numerics-is-that-normal-expected)
tagwithOptGroup | Boolean|  false| to creat tags with optgroup/parent text
tagInSepContainer | String | none | Continer id in which you want to show dropdonw tags (note- Valid only for multiple select)
tagTitle | Boolean | false | To enable title text on tags
tags  | Boolean | true | To enable/disable tags
tagsSorting | Boolean|  true | In multiple select droope(specially in prefill case) to prevent automatic tags sorting


## Methods

#### addData() : To add new data in existing droope
```javascript    
   instance.addData({
    'data': {
        "saeed": "saeedkhan"
    },
    'status': "Checked",
    prefillData: [2.2, 4.1]
});
```

#### replaceData() : To replace existing data with new data.
```javascript    
   instance.replaceData({
    'data': {
        "#1": "Agra",
        "#2": "Delhi",
        "#3": "Lucknow"
    },
    'status': "Checked",
    prefillData: 2
});
```

#### destroy() : To destroy droope
```javascript    
   instance.destroy();
```

#### select() : to promatically selection.

```javascript    
For Single Selection
instance.select({
    'key': '2'
});

For multiple Selection
instance.select({
    'key': [2, 4]
});
```

#### deselect() : to promatically de-selection.
```javascript        
    For Single Selection
    instance.deselect({
        'key': '2.2'
    });
    
    For multiple Selection
    instance.deselect({
        'key': [2.2, 4.1]
    });
```


## Callback methods

#### onChange()
     Fire only when a value change in droope
```javascript        
    new DD({
        id: "mis",
        data: indDD,
        onChange: function() {
            alert('On Change Fired');
        }
    });
```

#### onDeselect()
     Fire only when a value has been deselected
```javascript        
    new DD({
        id: "mis",
        data: indDD,
        onDeselect: function() {
            alert('On Deselect Fired');
        }
    });
```

#### onTagCreate()
     Fire only when tag is created
```javascript        
    new DD({
        id: "mis",
        data: indDD,
        onTagCreate: function() {
            alert('On onTagCreate Fired');
        }
    });
```

#### onTagClick()
     Fire only when user click on tag
```javascript        
    new DD({
        id: "mis",
        data: indDD,
        onTagClick: function() {
            alert('On onTagClick Fired');
        }
    });
```

#### onClickReq()
     Fire only when user select any value either by mouse/touce
```javascript        
    new DD({
        id: "mis",
        data: indDD,
        onClickReq: function() {
            alert('On onClickReq Fired');
        }
    });
```


#### onClearTag()
     Fire only when deselection done by node which passed in option -> "clearAllTag"
```javascript        
    new DD({
        id: "mis",
        data: indDD,
        onClearTag: function() {
            alert('On onClearTag Fired');
        }
    });
```

### Author
   [Mohd Saeed Khan](http://www.saeed3e.com)

### Contributers
    Nitin
    Sakshi
    Mahima

### Version 
    v1.0.0 --> Stable version first release.
