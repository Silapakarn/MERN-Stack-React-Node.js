package com.codemobiles.android_calulator;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import net.sourceforge.jeval.EvaluationException;
import net.sourceforge.jeval.Evaluator;

public class MainActivity extends AppCompatActivity {


    private TextView mOutputText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mOutputText = (TextView)findViewById(R.id.outputTextView);
    }

    public void onClick(View view){
        Button btn = (Button) view;

        String input = btn.getText().toString();
        mOutputText.setText(mOutputText.getText().toString() + input);

    }

    public void onClickClear(View v){
        mOutputText.setText("");
    }


    public void onClickEnter(View view) {
        Evaluator exp = new Evaluator();
        try {
            String output = exp.evaluate(mOutputText.getText().toString());
            mOutputText.setText(output.replace(".0",""));
        } catch (EvaluationException e) {
        }
    }


}
