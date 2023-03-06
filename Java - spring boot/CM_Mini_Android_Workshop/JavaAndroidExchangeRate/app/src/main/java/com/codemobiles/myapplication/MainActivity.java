package com.codemobiles.myapplication;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;


import java.text.DecimalFormat;

public class MainActivity extends AppCompatActivity {


  private EditText mInputText;
  private TextView mUSDTextView;
  private TextView mHKDTextView;
  private TextView mGBPTextView;
  private TextView mSGDTextView;
  private TextView mEURTextView;
  private TextView mJPYTextView;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    bindWidgets();
  }

  private void bindWidgets() {
    mInputText = (EditText) findViewById(R.id.inputEditText);
    mUSDTextView = (TextView) findViewById(R.id.textView_USD);
    mGBPTextView = (TextView) findViewById(R.id.textView_GBP);
    mHKDTextView = (TextView) findViewById(R.id.textView_HKD);
    mSGDTextView = (TextView) findViewById(R.id.textView_SGD);
    mEURTextView = (TextView) findViewById(R.id.textView_EUR);
    mJPYTextView = (TextView) findViewById(R.id.textView_JPY);
  }

  public void onClickConvert(View view) {
    mUSDTextView.setText(convert("USD"));
    mGBPTextView.setText(convert("GBP"));
    mHKDTextView.setText(convert("HDK"));
    mSGDTextView.setText(convert("SGD"));
    mEURTextView.setText(convert("EUR"));
    mJPYTextView.setText(convert("JPY"));
  }

  private String convert(String countryCode){

    double ratio = 0;
    float baht = Integer.valueOf(mInputText.getText().toString());

    if (countryCode.equals("USD") == true){
      ratio = 33.07;
    }else  if (countryCode.equals("GBP") == true){
      ratio = 45.4725;
    }else  if (countryCode.equals("HDK") == true){
      ratio = 4.3275	;
    }else  if (countryCode.equals("SGD") == true){
      ratio = 29.94	;
    }else  if (countryCode.equals("EUR") == true){
      ratio = 39.6175;
    }else  if (countryCode.equals("JPY") == true){
      ratio = 29.94;
    }

    double result = baht / ratio;
    DecimalFormat formatter = new DecimalFormat("#,###.00");
    return formatter.format(result);

  }
}
