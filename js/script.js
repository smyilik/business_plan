function f()
{
    var state = document.getElementById('6').style.display;
    if (state == 'block') {
        state = 'none';
    }
    else {
        state = 'block';
    }
    document.getElementById('6').style.display = state;
}

// Пофиксить баг с толщиной итоговой таблицы

// Добавить возможность сворачивать таблицы, чтобы видно было только название

// Возможно переделать 2ю таблицу, чтобы было всего 1 колонка, только затраченная сумма

// Когда вводишь название уже использованное - у тебя значения заполняются из базы данных

function onStart()
{
    // 0я таблица
    // автоматически заполнить название "test"


    // 1я таблица
    // автоматически заполнить курс валюты в 1й таблице, без соответствия с другими таблицами
    // автоматически заполнить значения в 1й таблице, без соответствия с другими таблицами


    // 2я таблица
    // автоматически заполнить значения во второй таблице в соответствии с 1й таблицей
    // 1й столб - сумма из 1й таблицы
    // 2й столб - 0
    // 3й столб - сумма 1го и 2го столбов
    fill_2();


    // 3я таблица
    // автоматически заполнить значения, без соответствия с другими таблицами


    // 4я таблица
    // автоматически заполнить значения, без соответствия с другими таблицами


    // 5я таблица
    // автоматически заполнить значения, без соответствия с другими таблицами



}

function test()
{
    
}

function next(id)
{
    var list = id.split('-');
    var new_id = list[0] + '-' + (Number(list[1]) + 1).toString() + '-' + list[2] + '-' + list[3];
    return new_id;
}

function fill_2_x_3()
{
    var id_first = '2-2-1-0';
    var id_second = '2-2-2-0';
    var id = '2-2-3-0';
    var temp;
    for (var i = 0; i < 12; i++) {
        temp = Number(document.getElementById(id_first).textContent);
        temp += Number(document.getElementById(id_second).textContent);
        document.getElementById(id).textContent = temp;

        id_first = next(id_first);
        id_second = next(id_second);
        id = next(id);
    }
}

function fill_2_14(number)
{
    var id;
    var result;
    switch (number){
        case 1:
            id = '2-2-1-0';
            result = '2-14-1-0';
            break;
        case 2:
            id = '2-2-2-0';
            result = '2-14-2-0';
            break;
        case 3:
            id = '2-2-3-0';
            result = '2-14-3-0';
            break;
    }
    var sum = 0;
    for (var i = 0; i < 12; i++) {
        sum += Number(document.getElementById(id).textContent);
        id = next(id);
    }
    document.getElementById(result).textContent = sum;
}

function fill_2_15()
{
    var first = Number(document.getElementById('2-14-3-0').textContent);
    var second = Number(document.getElementById('1-2-1-0').textContent);
    document.getElementById('2-15-1-0').textContent = Math.round(first / second * 100) / 100;
}

function fill_2()
{
    fill_2_x_3();
    fill_2_14(1);
    fill_2_14(2);
    fill_2_14(3);
    fill_2_15();
}

// 0 table
function onSpaceChange()
{
    //console.log(1);
}

// 1 table
function onCurrencyChange(number)
{
    switch(number)
    {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            break;
    }
}

function onRentChange()
{
    
}


// 2 table
function onInvestmentChange()
{

}


// 3 table
function onSpendingsChange()
{

}


// 4 table
function onForecastChange()
{

}

// 5 table
function onAutofillClick()
{

}

function onPlanChange()
{

}

// Result table
function onButtonClick()
{

}