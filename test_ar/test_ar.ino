#define led_1 11
#define led_2 10
#define sw 8
String serial_result = "";
String old_result = "2";
String sw_status = "";

void setup() {
  pinMode(led_1, OUTPUT);
  pinMode(led_2, OUTPUT);
  pinMode(sw, INPUT_PULLUP);
  Serial.begin(9600);
}



void loop(){
   // スイッチ状態出力
  if(digitalRead(sw) == LOW){
    sw_status = "{\"sw\":\"False\"}";
    Serial.println(sw_status);
  }else if(digitalRead(sw) == HIGH){
    sw_status = "{\"sw\":\"True\"}";
    Serial.println(sw_status);
  }

  int serial_x = Serial.read();
  serial_result = String(serial_x);
//  Serial.println(serial_result);
  if(serial_result == old_result){
    old_result = serial_result;
  }else{
    if(serial_result == "3"){
      digitalWrite(led_1, HIGH);
      digitalWrite(led_2, HIGH);
      }
    else if(serial_result == "1"){
      digitalWrite(led_1, HIGH);
      digitalWrite(led_2, LOW);
    }
    else if(serial_result == "2"){
      digitalWrite(led_1, LOW);
      digitalWrite(led_2, HIGH);
    }
    else if(serial_result == "-1"){
      digitalWrite(led_1, LOW);
      digitalWrite(led_2, LOW);
    }
    old_result = serial_result;
  }
  
}
