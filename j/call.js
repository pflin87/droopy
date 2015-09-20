$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

var sg1 = {
    id: "single",
    data: ug_course,
    sortPrefix: 'a'
};
new DD(sg1);

var sg2 = {
    id: "singlePrefill",
    data: sngNum,
    sortPrefix: '#',
    prefillData: "1"
};
new DD(sg2);

var sg3 = {
    id: "singleSelect",
    data: sngNum,
    isSearch: false
};
new DD(sg3);



/******************************Single Select Dependent Case****************************************************************************/
function singleSelectDependent() {
    var obj = {
        id: "dependent1",
        data: FA_ROLE_PARENT[key],
        max_height: 300,
        onClickReq: function(_obj, key, sts) {
            console.log(key)
        }
    };
    xyz = new DD(obj);
}

var obj4 = {
    id: "dependent",
    data: FAREA,
    maxHeight: 200,
    onClickReq: function(thisobj, key, sts) {
        if (!window.singleSelectInstance) {
            var objD = {
                id: "dependent1",
                data: FA_ROLE_PARENT[key]
            };

            singleSelectInstance = new DD(objD);
        } else {
            singleSelectInstance.replaceData({
                data: FA_ROLE_PARENT[key],
                isReset: 'noreset'
            })
        }
    }
};
var instance = new DD(obj4);


/****************************************Multi Select*******************************************************/

var mult1 = {
    id: "dropdownAB",
    data: indDD,
    sortPrefix: 'a',
    checkBox: true
};
new DD(mult1);

var mult2 = {
    id: "dropdownAC",
    data: CurrentLocObj,
    prefillData: '5000',
    checkBox: true,
    maxTagsCount: 3
};
new DD(mult2);

var sepTag = {
    id: "ddAC",
    data: dataJson1,
    checkBox: true,
    tagInSepContainer: "idSap",
    clearTagId: {
        "clrAll_ddAC": {
            id: ['ddAC']
        }
    },
    clearAllInside: {
        'Text': 'ClearAll'
    }
};
new DD(sepTag);


/*Multiselect dependent calling*/
var objApp = {
    id: "append",
    data: faObj,
    checkBox: true,
    onClickReq: function(thisObj, key, status) {
        if (!window.roleDD) {
            var obj9 = {
                id: "append1",
                data: faRoleObj[key],
                checkBox: true
            };
            roleDD = new DD(obj9, status, key);
        } else {
            if (status == "Checked") {
                roleDD.addData({
                    data: faRoleObj[key],
                    key: key
                })
            } else if (status == "Unchecked") {
                roleDD.removeData({
                    data: faRoleObj[key],
                    status: "Unchecked",
                    key: key
                })
            }
        }
    }
};
new DD(objApp)
    /*End of code*/

/*multisearch with search disabled*/
var mult4 = {
    id: "UG",
    data: CurrentLocObj,
    checkBox: true,
    isSearch: false
};
new DD(mult4);
