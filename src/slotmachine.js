import React from "react";
import css from "./slotmachine.module.css";

export default function SlotMachine({marginArr}) {

  return (
      <div className={css.slotWrapper2}> 
        <div className={css.slotWrapper}>
          <div className={css.slot} style={{marginTop:`-${marginArr[0]}px`}} id="0">
            {/* <p>&nbsp;</p> */}
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className={css.slot} style={{marginTop:`-${marginArr[1]}px`}} id="1">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className={css.slot} style={{marginTop:`-${marginArr[2]}px`}} id="2">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className={css.slot} style={{marginTop:`-${marginArr[3]}px`}} id="3">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className={css.slot} style={{marginTop:`-${marginArr[4]}px`}} id="4">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className={css.slot} style={{marginTop:`-${marginArr[5]}px`}} id="5">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className={css.slot} style={{marginTop:`-${marginArr[6]}px`}} id="6">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className={css.slot} style={{marginTop:`-${marginArr[7]}px`}} id="7">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className={css.slot} style={{marginTop:`-${marginArr[8]}px`}} id="8">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>
        </div>
      </div>
  );
}
