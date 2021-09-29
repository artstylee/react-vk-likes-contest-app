import React from "react";
import css from "./slotmachine.module.css";

export default function SlotMachine({ marginTop }) {
  return (
    <div className={css.slotWrapper2}>
      <div className={css.slotWrapper}>
        <div className={css.slot} style={{ marginTop: `-${marginTop[0]}px` }}>
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
        <div className={css.slot} style={{ marginTop: `-${marginTop[1]}px` }}>
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
        <div className={css.slot} style={{ marginTop: `-${marginTop[2]}px` }}>
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
        <div className={css.slot} style={{ marginTop: `-${marginTop[3]}px` }}>
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
        <div className={css.slot} style={{ marginTop: `-${marginTop[4]}px` }}>
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
        <div className={css.slot} style={{ marginTop: `-${marginTop[5]}px` }}>
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
        <div className={css.slot} style={{ marginTop: `-${marginTop[6]}px` }}>
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
        <div className={css.slot} style={{ marginTop: `-${marginTop[7]}px` }}>
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
        <div className={css.slot} style={{ marginTop: `-${marginTop[8]}px` }}>
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
