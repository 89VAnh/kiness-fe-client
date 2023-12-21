import { Typography } from "antd";

import familyImg from "@/assets/img/expected/img_standard.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";

import styles from "./scss/chart-growth.module.scss";

export default function ChartGrowth(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <div className={styles.headerWrap}>
            <DivTransition position="x" className={styles.headerTitle}>
              <Typography.Title level={2}>
                Chiều cao cũng là một kỹ năng.
                <br />
                <b>“Bạn có thể phát triển nhiều như bạn biết”</b>
              </Typography.Title>

              <Typography.Paragraph className={styles.headerParagraph}>
                Người ta nói rằng điểm số của trẻ bị ảnh hưởng trực tiếp bởi kỹ
                năng thông tin của mẹ phải không?
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.headerParagraph}>
                Vậy bạn có biết rằng tăng chiều cao đồng nghĩa với việc có được
                môi trường thuận lợi để học tập tốt?
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.headerParagraph}>
                Bây giờ bạn có thể tăng chiều cao của mình nhiều như bạn biết.
              </Typography.Paragraph>
            </DivTransition>
            <DivTransition position="x" point={50} className={styles.img}>
              <img src={familyImg} alt="doctor" />
            </DivTransition>
          </div>

          <div className={styles.genWrap}>
            <Typography.Title level={5} className={styles.title}>
              Giá trị tiêu chuẩn cho sự phát triển của thanh niên Việt Nam (nam)
            </Typography.Title>
            <DivTransition className="table-wrap">
              <table className="responsive-tbl tbl-mint">
                <thead>
                  <tr>
                    <th>Lớp (Tuổi)</th>
                    <th>3%</th>
                    <th>10%</th>
                    <th>25%</th>
                    <th>50%</th>
                    <th>75%</th>
                    <th>90%</th>
                    <th>97%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3 tuổi</td>
                    <td>89,7</td>
                    <td>91,8</td>
                    <td>93,9</td>
                    <td>96,5</td>
                    <td>99,2</td>
                    <td>101,8</td>
                    <td>104,4</td>
                  </tr>
                  <tr>
                    <td>4 tuổi</td>
                    <td>95,6</td>
                    <td>97,9</td>
                    <td>100,3</td>
                    <td>103,1</td>
                    <td>105,9</td>
                    <td>108,5</td>
                    <td>111,2</td>
                  </tr>
                  <tr>
                    <td>5 tuổi</td>
                    <td>101,6</td>
                    <td>104.1</td>
                    <td>106,7</td>
                    <td>109,6</td>
                    <td>112,6</td>
                    <td>115,3</td>
                    <td>118,0</td>
                  </tr>
                  <tr>
                    <td>6 tuổi</td>
                    <td>107,4</td>
                    <td>110.1</td>
                    <td>112,8</td>
                    <td>115,9</td>
                    <td>119,1</td>
                    <td>122,0</td>
                    <td>125,0</td>
                  </tr>
                  <tr>
                    <td>(lớp 1) 7 tuổi</td>
                    <td>113,1</td>
                    <td>115,9</td>
                    <td>118,8</td>
                    <td>122.1</td>
                    <td>125,4</td>
                    <td>128,6</td>
                    <td>131,7</td>
                  </tr>
                  <tr>
                    <td>(lớp 2) 8 tuổi</td>
                    <td>118,5</td>
                    <td>121,4</td>
                    <td>124,4</td>
                    <td>127,9</td>
                    <td>131,4</td>
                    <td>134,7</td>
                    <td>137,9</td>
                  </tr>
                  <tr>
                    <td>(lớp 3) 9 tuổi</td>
                    <td>123,6</td>
                    <td>126,6</td>
                    <td>129,8</td>
                    <td>133,4</td>
                    <td>137,1</td>
                    <td>140,5</td>
                    <td>143,9</td>
                  </tr>
                  <tr>
                    <td>(lớp 4) 10 tuổi</td>
                    <td>128,4</td>
                    <td>131,6</td>
                    <td>135,0</td>
                    <td>138,8</td>
                    <td>142,8</td>
                    <td>146,5</td>
                    <td>150,2</td>
                  </tr>
                  <tr>
                    <td>(lớp 5) 11 tuổi</td>
                    <td>133,2</td>
                    <td>136,8</td>
                    <td>140,5</td>
                    <td>144,7</td>
                    <td>149,0</td>
                    <td>153,0</td>
                    <td>157,1</td>
                  </tr>
                  <tr>
                    <td>(lớp 6) 12 tuổi</td>
                    <td>138,2</td>
                    <td>142,4</td>
                    <td>146,7</td>
                    <td>151,4</td>
                    <td>156,2</td>
                    <td>160,5</td>
                    <td>164,7</td>
                  </tr>
                  <tr>
                    <td>(lớp 1) 13 tuổi</td>
                    <td>144,2</td>
                    <td>148,9</td>
                    <td>153,6</td>
                    <td>158,6</td>
                    <td>163,5</td>
                    <td>167,8</td>
                    <td>171,9</td>
                  </tr>
                  <tr>
                    <td>(năm thứ 2 trung học) 14 tuổi</td>
                    <td>150,6</td>
                    <td>155,5</td>
                    <td>160,2</td>
                    <td>165,0</td>
                    <td>169,5</td>
                    <td>173,3</td>
                    <td>176,9</td>
                  </tr>
                  <tr>
                    <td>(năm thứ 3 trung học cơ sở) 15 tuổi</td>
                    <td>156,5</td>
                    <td>160,8</td>
                    <td>164,9</td>
                    <td>169,2</td>
                    <td>173,2</td>
                    <td>176,6</td>
                    <td>179,9</td>
                  </tr>
                  <tr>
                    <td>(năm thứ nhất trung học) 16 tuổi</td>
                    <td>160,3</td>
                    <td>163,9</td>
                    <td>167,5</td>
                    <td>171,4</td>
                    <td>175,2</td>
                    <td>178,5</td>
                    <td>181,7</td>
                  </tr>
                  <tr>
                    <td>(năm thứ 2 trung học) 17 tuổi</td>
                    <td>162,2</td>
                    <td>165,5</td>
                    <td>168,9</td>
                    <td>172,6</td>
                    <td>176,4</td>
                    <td>179,7</td>
                    <td>183.1</td>
                  </tr>
                  <tr>
                    <td>(năm thứ 3 trung học) 18 tuổi</td>
                    <td>163,3</td>
                    <td>166,6</td>
                    <td>169,9</td>
                    <td>173,6</td>
                    <td>177,4</td>
                    <td>180,8</td>
                    <td>184,3</td>
                  </tr>
                </tbody>
              </table>
            </DivTransition>

            <Typography.Title level={5} className={styles.title}>
              Giá trị tiêu chuẩn cho sự phát triển thanh niên ở Việt Nam (nữ)
            </Typography.Title>
            <DivTransition className="table-wrap">
              <table className="responsive-tbl tbl-pink">
                <thead>
                  <tr>
                    <th>Lớp (Tuổi)</th>
                    <th>3%</th>
                    <th>10%</th>
                    <th>25%</th>
                    <th>50%</th>
                    <th>75%</th>
                    <th>90%</th>
                    <th>97%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3 tuổi</td>
                    <td>88,1</td>
                    <td>90,4</td>
                    <td>92,8</td>
                    <td>95,4</td>
                    <td>98,1</td>
                    <td>101,5</td>
                    <td>103,0</td>
                  </tr>
                  <tr>
                    <td>4 tuổi</td>
                    <td>94,5</td>
                    <td>96,8</td>
                    <td>99,2</td>
                    <td>101,9</td>
                    <td>104,7</td>
                    <td>107,3</td>
                    <td>109,8</td>
                  </tr>
                  <tr>
                    <td>5 tuổi</td>
                    <td>100,7</td>
                    <td>103,4</td>
                    <td>105,6</td>
                    <td>108,4</td>
                    <td>111,3</td>
                    <td>114,0</td>
                    <td>116,7</td>
                  </tr>
                  <tr>
                    <td>6 tuổi</td>
                    <td>106,6</td>
                    <td>109,1</td>
                    <td>111,8</td>
                    <td>114,7</td>
                    <td>117,8</td>
                    <td>120,5</td>
                    <td>123,3</td>
                  </tr>
                  <tr>
                    <td>(lớp 1) 7 tuổi</td>
                    <td>112,2</td>
                    <td>114,8</td>
                    <td>117,6</td>
                    <td>120,8</td>
                    <td>124.1</td>
                    <td>127,1</td>
                    <td>130,2</td>
                  </tr>
                  <tr>
                    <td>(lớp 2) 8 tuổi</td>
                    <td>117,5</td>
                    <td>120,3</td>
                    <td>123,2</td>
                    <td>126,7</td>
                    <td>130,2</td>
                    <td>133,6</td>
                    <td>137,1</td>
                  </tr>
                  <tr>
                    <td>(lớp 3) 9 tuổi</td>
                    <td>122,8</td>
                    <td>125,8</td>
                    <td>129,0</td>
                    <td>132,6</td>
                    <td>136,5</td>
                    <td>140,2</td>
                    <td>144,1</td>
                  </tr>
                  <tr>
                    <td>(lớp 4) 10 tuổi</td>
                    <td>128,2</td>
                    <td>131,6</td>
                    <td>135,1</td>
                    <td>139,1</td>
                    <td>143,3</td>
                    <td>147,2</td>
                    <td>151,2</td>
                  </tr>
                  <tr>
                    <td>(lớp 5) 11 tuổi</td>
                    <td>133,8</td>
                    <td>137,6</td>
                    <td>141,5</td>
                    <td>145,8</td>
                    <td>150,0</td>
                    <td>153,9</td>
                    <td>157,6</td>
                  </tr>
                  <tr>
                    <td>(lớp 6) 12 tuổi</td>
                    <td>139,5</td>
                    <td>143,5</td>
                    <td>147,5</td>
                    <td>151,7</td>
                    <td>155,7</td>
                    <td>159,2</td>
                    <td>162,6</td>
                  </tr>
                  <tr>
                    <td>(lớp 1) 13 tuổi</td>
                    <td>144,7</td>
                    <td>148,4</td>
                    <td>152.0</td>
                    <td>155,9</td>
                    <td>159,7</td>
                    <td>162,9</td>
                    <td>166,0</td>
                  </tr>
                  <tr>
                    <td>(năm thứ 2 trung học) 14 tuổi</td>
                    <td>147,9</td>
                    <td>151,3</td>
                    <td>154,6</td>
                    <td>158,3</td>
                    <td>161,9</td>
                    <td>165,0</td>
                    <td>168,1</td>
                  </tr>
                  <tr>
                    <td>(năm thứ 3 trung học cơ sở) 15 tuổi</td>
                    <td>149,3</td>
                    <td>152,6</td>
                    <td>155,9</td>
                    <td>159,5</td>
                    <td>163,0</td>
                    <td>166,1</td>
                    <td>169,2</td>
                  </tr>
                  <tr>
                    <td>(năm thứ nhất trung học) 16 tuổi</td>
                    <td>150,3</td>
                    <td>153,4</td>
                    <td>156,5</td>
                    <td>160,0</td>
                    <td>163,5</td>
                    <td>166,7</td>
                    <td>169,8</td>
                  </tr>
                  <tr>
                    <td>(năm thứ 2 trung học) 17 tuổi</td>
                    <td>151,0</td>
                    <td>153,9</td>
                    <td>156,9</td>
                    <td>160,2</td>
                    <td>163,7</td>
                    <td>166,9</td>
                    <td>170,1</td>
                  </tr>
                  <tr>
                    <td>(năm thứ 3 trung học) 18 tuổi</td>
                    <td>151,6</td>
                    <td>154,4</td>
                    <td>157,3</td>
                    <td>160,6</td>
                    <td>164.1</td>
                    <td>167,2</td>
                    <td>170,4</td>
                  </tr>
                </tbody>
              </table>
            </DivTransition>
          </div>
        </div>
      </section>
    </>
  );
}
