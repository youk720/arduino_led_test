#define led_1 11
#define led_2 10
#define sw 8
#define sw_2 9
String serial_result = "";
String old_result = "2";
String sw_status = "";
int ed = false;
int ee = 0;

void setup() {
  pinMode(led_1, OUTPUT);
  pinMode(led_2, OUTPUT);
  pinMode(sw, INPUT_PULLUP);
  pinMode(sw_2, INPUT_PULLUP);
  Serial.begin(9600);
}



void loop(){
   // スイッチ状態出力
  // 1回目   
   if(digitalRead(sw) == HIGH && ed == false){
    ed = true;
   }else if(digitalRead(sw) == LOW && ed == true){
    ed = false;
    ee++;
   }
//   偶数なら
   if(ee % 2 == 0 && digitalRead(sw_2) == LOW){
    sw_status = "{\"sw\":\"True\"}";
    Serial.println(sw_status);
   }else if(ee % 2 == 1 && digitalRead(sw_2) == LOW){
    sw_status = "{\"sw\":\"False\"}";
    Serial.println(sw_status);
   }else if(digitalRead(sw_2) == LOW && ee % 2 == 1){
    sw_status = "{\"sw\":\"False\"}";
    Serial.println(sw_status);
   }else if(digitalRead(sw_2) == HIGH && ee % 2 == 1){
    sw_status = "{\"sw\":\"True\"}";
    Serial.println(sw_status);
  }

  int serial_x = Serial.read();
  serial_result = String(serial_x);
//  Serial.println(serial_result);
  if(serial_result != old_result){
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
  }else if(serial_result == ""){
    return;
  }else{
     old_result = serial_result;
  }
}
