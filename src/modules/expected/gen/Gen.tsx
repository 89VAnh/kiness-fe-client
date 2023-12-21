import { Typography } from "antd";

import familyImg from "@/assets/img/expected/img_family.png";
import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";
import DivTransition from "@/modules/shared/transition/DivTransition";

import styles from "./scss/gen.module.scss";

export default function Gen(): JSX.Element {
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
              Dự đoán chiều cao di truyền (nam)
            </Typography.Title>
            <DivTransition className="table-wrap">
              <table className="responsive-tbl">
                <thead>
                  <tr>
                    <th className="first">cha mẹ</th>
                    <th>162</th>
                    <th>165</th>
                    <th>167</th>
                    <th>170</th>
                    <th>172</th>
                    <th>175</th>
                    <th>177</th>
                    <th>180</th>
                    <th>182</th>
                    <th>185</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>150</td>
                    <td className="point">162,5</td>
                    <td>164</td>
                    <td>165</td>
                    <td>166,5</td>
                    <td>167,5</td>
                    <td>169</td>
                    <td>170</td>
                    <td>171,5</td>
                    <td>172,5</td>
                    <td>174</td>
                  </tr>
                  <tr>
                    <td>152</td>
                    <td>163,5</td>
                    <td className="point">165</td>
                    <td>166</td>
                    <td>167,5</td>
                    <td>168,5</td>
                    <td>170</td>
                    <td>171</td>
                    <td>172,5</td>
                    <td>173,5</td>
                    <td>175</td>
                  </tr>
                  <tr>
                    <td>155</td>
                    <td>165</td>
                    <td>166,5</td>
                    <td className="point">167,5</td>
                    <td>169</td>
                    <td>170</td>
                    <td>171,5</td>
                    <td>172,5</td>
                    <td>174</td>
                    <td>175</td>
                    <td>176,5</td>
                  </tr>
                  <tr>
                    <td>157</td>
                    <td>166</td>
                    <td>167,5</td>
                    <td>168,5</td>
                    <td className="point">170</td>
                    <td>171</td>
                    <td>172,5</td>
                    <td>173,5</td>
                    <td>175</td>
                    <td>176</td>
                    <td>177,5</td>
                  </tr>
                  <tr>
                    <td>160</td>
                    <td>167,5</td>
                    <td>169</td>
                    <td>170</td>
                    <td>171,5</td>
                    <td className="point">172,5</td>
                    <td>174</td>
                    <td>175</td>
                    <td>176,5</td>
                    <td>177,5</td>
                    <td>179</td>
                  </tr>
                  <tr>
                    <td>162</td>
                    <td>168,5</td>
                    <td>170</td>
                    <td>171</td>
                    <td>172,5</td>
                    <td>173,5</td>
                    <td className="point">175</td>
                    <td>176</td>
                    <td>177,5</td>
                    <td>178,5</td>
                    <td>180</td>
                  </tr>
                  <tr>
                    <td>165</td>
                    <td>170</td>
                    <td>171,5</td>
                    <td>172,5</td>
                    <td>174</td>
                    <td>175</td>
                    <td>176,5</td>
                    <td className="point">177,5</td>
                    <td>179</td>
                    <td>180</td>
                    <td>181,5</td>
                  </tr>
                  <tr>
                    <td>167</td>
                    <td>171</td>
                    <td>172,5</td>
                    <td>173,5</td>
                    <td>175</td>
                    <td>176</td>
                    <td>177,5</td>
                    <td>178,5</td>
                    <td className="point">180</td>
                    <td>181</td>
                    <td>182,5</td>
                  </tr>
                  <tr>
                    <td>170</td>
                    <td>172,5</td>
                    <td>174</td>
                    <td>175</td>
                    <td>176,5</td>
                    <td>177,5</td>
                    <td>179</td>
                    <td>180</td>
                    <td>181,5</td>
                    <td className="point">182,5</td>
                    <td>184</td>
                  </tr>
                  <tr>
                    <td>172</td>
                    <td>173,5</td>
                    <td>175</td>
                    <td>176</td>
                    <td>177,5</td>
                    <td>178,5</td>
                    <td>180</td>
                    <td>181</td>
                    <td>182,5</td>
                    <td>183,5</td>
                    <td className="point">185</td>
                  </tr>
                </tbody>
              </table>
            </DivTransition>

            <Typography.Title level={5} className={styles.title}>
              Dự đoán chiều cao di truyền (nữ)
            </Typography.Title>
            <DivTransition className="table-wrap">
              <table className="responsive-tbl">
                <thead>
                  <tr>
                    <th className="first">cha mẹ</th>
                    <th>162</th>
                    <th>165</th>
                    <th>167</th>
                    <th>170</th>
                    <th>172</th>
                    <th>175</th>
                    <th>177</th>
                    <th>180</th>
                    <th>182</th>
                    <th>185</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>150</td>
                    <td className="point">149,5</td>
                    <td>151</td>
                    <td>152</td>
                    <td>153,5</td>
                    <td>154,5</td>
                    <td>156</td>
                    <td>157</td>
                    <td>158,5</td>
                    <td>159,5</td>
                    <td>161</td>
                  </tr>
                  <tr>
                    <td>152</td>
                    <td>150,5</td>
                    <td className="point">152</td>
                    <td>153</td>
                    <td>154,5</td>
                    <td>155,5</td>
                    <td>157</td>
                    <td>158</td>
                    <td>159,5</td>
                    <td>160,5</td>
                    <td>162</td>
                  </tr>
                  <tr>
                    <td>155</td>
                    <td>152</td>
                    <td>153,5</td>
                    <td className="point">154,5</td>
                    <td>155</td>
                    <td>157</td>
                    <td>158</td>
                    <td>159,5</td>
                    <td>161</td>
                    <td>162</td>
                    <td>163,5</td>
                  </tr>
                  <tr>
                    <td>157</td>
                    <td>153</td>
                    <td>154,5</td>
                    <td>155,5</td>
                    <td className="point">157</td>
                    <td>158</td>
                    <td>159,5</td>
                    <td>160,5</td>
                    <td>162</td>
                    <td>163,5</td>
                    <td>164,5</td>
                  </tr>
                  <tr>
                    <td>160</td>
                    <td>154,5</td>
                    <td>156</td>
                    <td>157</td>
                    <td>158,5</td>
                    <td className="point">159,5</td>
                    <td>161</td>
                    <td>162</td>
                    <td>163,5</td>
                    <td>164,5</td>
                    <td>166</td>
                  </tr>
                  <tr>
                    <td>162</td>
                    <td>155,5</td>
                    <td>157</td>
                    <td>158</td>
                    <td>159,5</td>
                    <td>160,5</td>
                    <td className="point">162</td>
                    <td>163</td>
                    <td>164,5</td>
                    <td>165,5</td>
                    <td>167</td>
                  </tr>
                  <tr>
                    <td>165</td>
                    <td>157</td>
                    <td>158,5</td>
                    <td>159,5</td>
                    <td>161</td>
                    <td>162</td>
                    <td>163,5</td>
                    <td className="point">164,5</td>
                    <td>166</td>
                    <td>167</td>
                    <td>168,5</td>
                  </tr>
                  <tr>
                    <td>167</td>
                    <td>158</td>
                    <td>159,5</td>
                    <td>160,5</td>
                    <td>162</td>
                    <td>163</td>
                    <td>164,5</td>
                    <td>165,5</td>
                    <td className="point">167</td>
                    <td>168</td>
                    <td>169,5</td>
                  </tr>
                  <tr>
                    <td>170</td>
                    <td>159,5</td>
                    <td>161</td>
                    <td>162</td>
                    <td>163,5</td>
                    <td>164,5</td>
                    <td>166</td>
                    <td>167</td>
                    <td>168,5</td>
                    <td className="point">169,5</td>
                    <td>171</td>
                  </tr>
                  <tr>
                    <td>172</td>
                    <td>160,5</td>
                    <td>162</td>
                    <td>163</td>
                    <td>164,5</td>
                    <td>165,5</td>
                    <td>167</td>
                    <td>168</td>
                    <td>169,5</td>
                    <td>170,5</td>
                    <td>172</td>
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
