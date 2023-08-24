cfg.Light
cfg.MUI

function OnStart()
{
    bt = app.CreateBluetoothSerial()
    bt.SetOnConnect( bt_OnConnect )
     bt.Connect( "HC-05" )
       
        app.ShowPopup( "Aplikasi tidak conect ke arduino!!" )
        color = MUI.colors.teal
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")


        h = MUI.CreateTextJumbo("PILIH BAHASA","blue")
    h.SetTextColor("blue")
            lay.AddChild(h)

    
        btn = MUI.CreateButtonRoundO("INDONESIA", 0.5, 0.1, MUI.colors.blue.blue)
       btn.SetOnTouch(indo)
         lay.AddChild(btn)

        btn = MUI.CreateButtonRoundO("INGGRIS", 0.5, 0.1, MUI.colors.blue.blue)
        lay.AddChild(btn)

    app.AddLayout(lay)
 
}

function indo()
{
	    color = MUI.colors.teal
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")


        h = MUI.CreateTextJumbo("SELAMAT DATANG","blue")
    h.SetTextColor("blue")
            lay.AddChild(h)

    
        btn = MUI.CreateButtonRoundO("PAKAN LANGSUNG", 0.5, 0.1, MUI.colors.blue.blue)
 btn.SetOnTouch(odo)
        
                        lay.AddChild(btn)

        btn = MUI.CreateButtonRoundO("JADWAL", 0.5, 0.1, MUI.colors.blue.blue)
    btn.SetOnTouch(jadwal)
            lay.AddChild(btn)

    app.AddLayout(lay)
}


function odo()
{
	    color = MUI.colors.teal
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")


        h = MUI.CreateTextJumbo("PAKAN LANGSUNG","blue")
    h.SetTextColor("blue")
            lay.AddChild(h)

    
        btn = MUI.CreateButtonRoundO("PAKAN LANGSUNG", 0.5, 0.1, MUI.colors.blue.blue)
       btn.SetOnTouch(pakanL)
         lay.AddChild(btn)

        btn9 = MUI.CreateButtonRoundO("ATUR ULANG", 0.5, 0.1, MUI.colors.blue.blue)
        btn9.SetOnTouch(function (){app.ShowPopup( "Berhasil Kembali Kepengaturan Awal") })
         lay.AddChild(btn9)

    app.AddLayout(lay)
}
function pakanL()
{  
var s="";
        s += "function setServo(pin,pos)\n";
        //s += "function setServo(pin,pos)\n";
        s += "{\n";
        s += " if (pos<0) pos=0;\n";
        s += " if (pos>1) pos=1;\n";
        s += " analogWrite(pin, (1+pos)/50.0, {freq:20})\n";
        s += "}\n";
        s += "setServo( D4, 0.5 )\n";
    bt.Write( s )
}

function bt_OnConnect( ok )
{
    
    
}

function jadwal()
{
color = MUI.colors.blue
    app.InitializeUIKit(color.lighten1)

  

    lay = MUI.CreateLayout("Linear", "vertical,FillX")
     text = MUI.CreateTextH6( "JADWAL",0.3,0.3,"Vcenter" )
 text.SetTextSize( 29 )
 text.SetTextColor( "blue" )
lay.AddChild( text )
    
    
 lay1 = MUI.CreateLayout("Linear", "Horizontal,FillXY")
 
 
 
 
 
 lay2 = MUI.CreateLayout("Linear", "Horizontal,FillXY")
 
 
 
 text = MUI.CreateTextH1( "SIANG",0.3,0.1,"Vcenter" )
 text.SetTextSize( 20 )
 text.SetTextColor( "blue" )
lay2.AddChild( text )
        spn = MUI.CreateSpinner("Berat Pakan , 5 Putaran Servo,10 Putaran Servo,15 Putaran Servo,20 Putaran Servo,25 Putaran Servo,30 Putaran Servo", 0.6, 0.1)
        spn.SetTextColor( "blue" )
        
        spn.SetOnChange(OnChange)
  lay2.AddChild(spn)
             

        skb = MUI.CreateSwitch()
        
        skb.SetOnTouch(OnTouch)
        lay2.AddChild(skb)
 
 lay3 = MUI.CreateLayout("Linear", "Horizontal,FillXY")
 
 
 text = MUI.CreateTextH1( "SORE",0.3,0.1,"Vcenter" )
 text.SetTextSize( 20 )
 text.SetTextColor( "blue" )
lay3.AddChild( text )
             spn = MUI.CreateSpinner("Berat Pakan , 5 Putaran Servo,10 Putaran Servo,15 Putaran Servo,20 Putaran Servo,25 Putaran Servo,30 Putaran Servo", 0.6, 0.1)
        spn.SetTextColor( "blue" )
        
        spn.SetOnChange(OnChange)
  lay3.AddChild(spn)
             

        skb = MUI.CreateSwitch()
        
        skb.SetOnTouch(OnTouch)
        lay3.AddChild(skb)
 
 
 lay4 = MUI.CreateLayout("Linear", "Horizontal,FillXY")
 
 text = MUI.CreateTextH1( "MALAM",0.3,0.1,"Vcenter" )
 text.SetTextSize( 20 )
 text.SetTextColor( "blue" )
lay4.AddChild( text )
          spn = MUI.CreateSpinner("Berat Pakan , 5 Putaran Servo,10 Putaran Servo,15 Putaran Servo,20 Putaran Servo,25 Putaran Servo,30 Putaran Servo", 0.6, 0.1)
        spn.SetTextColor( "blue" )
        
        spn.SetOnChange(OnChange)
  lay4.AddChild(spn)
             

        skb = MUI.CreateSwitch()
        
        skb.SetOnTouch(OnTouch)
        lay4.AddChild(skb)
 
 text = MUI.CreateTextH1( "PAGI",0.3,0.1,"Vcenter" )
 text.SetTextSize( 20 )
 text.SetTextColor( "blue" )
lay1.AddChild( text )
           spn = MUI.CreateSpinner("Berat Pakan , 5 Putaran Servo,10 Putaran Servo,15 Putaran Servo,20 Putaran Servo,25 Putaran Servo,30 Putaran Servo", 0.6, 0.1)
        spn.SetTextColor( "blue" )
        
        spn.SetOnChange(OnChange)
  lay1.AddChild(spn)
             

        skb = MUI.CreateSwitch()
        
        skb.SetOnTouch(OnTouch)
        lay1.AddChild(skb)
lay.AddChild( lay1 )
lay.AddChild( lay2 )
lay.AddChild( lay3 )
lay.AddChild( lay4 )
    app.AddLayout(lay)
}

function OnChange(value, index)
{
    app.ShowPopup(value)
}


function OnTouch(value)
{if (value==true){
app.ShowPopup( "HIDUP" )
    
    //Get current time in milliseconds.
    var now = new Date().getTime()
    
    //Set alarm for 3 seconds time.
    app.SetAlarm( "Set", 1234, OnAlarm, now+5000)
}


    

else{
app.ShowPopup( "MATI" )
}
}
//Called when alarm is triggered.
//(Even if your app is closed)
function OnAlarm( id )
{
   bt.Write( "setServo( D4, 5 )\n")
}