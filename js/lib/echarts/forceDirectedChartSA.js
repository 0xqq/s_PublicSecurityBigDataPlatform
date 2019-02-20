

(function (API) {





        // 图片
        var image = [

            // 0
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAyCAYAAACXpx/YAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAAC' +
            'xIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAcRSURBVHic7ZxLjxw1FIWPe55/jjULBCtAQjyMkIiU' +
            'BPEKhJdAGMEGIVBgjVjw4yCZ7jGL1E2dOnWvq2bS3WRSfSXLdpXbXemv7sv2JNVacZDnV44BIJVrfz5d8V5rfCT6BrbeyObbWvM1vv2Gy/E' +
            'VxkZw0sSYqfstqd1nGFyie5B2cq4tWuYAbkHz4E1di+aOgFT4MKOxPPfiIbcAK5QIYJpoR59tSXVqbSdpe59fPOQIcARR+15bSzSnJ56mXl' +
            'Kfi92LQB8gwwes2nYVmFxWjc9F4mnqitqXGEJeYQySQS8WrIkCnoLbgsm1tudAVs20msEm6vN9z08naS8SNgP2fC7DWFHtgeUSQQemAau2c' +
            'm2FgfF4nW/xEplo1WCFGoHlciRjorkBH5ZXNjQH++bL7jsY8kGL4ZvoKY21/hF6kAzVu+75ZavVNHuAN+jhMmQGzZAXC1TFAEcpkQdX4R1T' +
            'fYQ2ZE+TFbAHVv253WPhAGvxmmvSCrK47cE1kMdOm6+p6db5Pd+7kbKm5zAtZrGIGhj6aK0XJ16QFYFVyAaSi17zIPN3mCjcSzyGynA1ONM' +
            'Xo8q4Q6qEdpDlFdZehXsM4ETqKS0GxoGVae0RhnBZNCWKIC8aLtBeydI8V7VXtfgEwCmGgK3MBczau8Y4xdIUyubj61E8sUjYaqJbubAH2L' +
            'TU4J5IYVOtebKJ53s1OAON4c+o7zbYVi9ei+eY6Cjn9fwwgz6Fr8UcTQM9INZeBsxj1Jyz1q4w1GA11YuErWmS9+PMgatguW3jdPHDhAFvM' +
            'PTbkZ/mYs9kcKOVskXK3M2GOT74GAK5ZvyaCt7E2Ew/gVAzvgSAVPAeOr9bM34ZPFDBCxhq9xH6/FgLg963eFuX3hjIOLUsW3v2qSBLFxgU' +
            'tBdJnwI46eC+XTN+SgXvoweTasZn+oU14zsASAXvdvVrAB7VjAcYvkwKlp/z/xTNu/WeNx4YK9RW3chqekjTTLu+uGb8lgreAnCSCm7VjG9' +
            'AQVgquAcAqeBeKvgkFXzU9W+jf+mOasaDVPASxkFaa3XMy4V3LQzV8/We6+Pr3jxbkVRrRSqjNeYoDbJyCuCsq8+79nnN+BMAUsEbdN+gf9' +
            'rdu2//iJpxOxV8XjPupoKP0aVHZLZfBfAQwL9deUj1IyoXXVlT4ZWwSwC15tGO09OKZ25b9yItb83zVKKAp1aqOIA6o3JeM/5OBS/XjD/CL' +
            'yv4ombcbj5QwZ2acZ/6r6AHbHA9wI+wX8BzIvM5kbuO2akGT6VAHCWPNJjKGYCzmvFtKvgQfi4MjCPoNYCLmnE/FbxTM34AgFTwIoB/0Nbg' +
            'fQP25LomVl+WnQdZ15W5D1Zrxq3RhztfbGNSwes142cM94sH8wTXn0XxntFbWNrqv+W6gHmL78kD1YzfRwM732uSymP/Su0KYFMzPkCf29q' +
            '8UytX3rPsE3YrOjZJQXsvzzkF2AOpP+aTBYgu4j1HZ8Jrxvep4A7GJtrEzOcl9TcAUDN+pHG6uKFr0vo8XHYp24yCd/KsDFh/EE8rohMXvB' +
            'NkixHr7jNrmmcAuGbclecx/2l5sAVU5lPngH6WZSog27p4GhxprQd3sClfM/4aTZbxtV5LBR909V30Jvor9IESMC/10TXp6JTlrmSOiQb8v' +
            'HcvLyRH0bqYoUdxeK+Xo2mOqq3wzhLvC+s6NDB+WS6ocErUipztRdhgqO0bEPyab4SWb1VaPlj/asAzxdHqUpWx0UYDZF7TVAPcWsRYo22q' +
            'b1KEvTOZY6L5tCIDiyDzHN72nxeYsAYbRIbrQebniUAvGi7QA9YlNA9ywvh88gr9sRrIeIOrJzp4j5aDNz1kp3Ct6IE8L+hiWTToSIPZzBp' +
            'Y09poQd/buz1Gr8Hero+mWqrFF1K3gq19p0g3QjRNAsagdGFB/8IgOn7j7dlG4xkw+2IuHmQvVTtAJpnrg4EezEb6KvZDWy7MpzO8LTyGwl' +
            'rpBVWeBm8Qg118oBVF0eqLFXRCn68Cvubq0Zs5gNlMc7TO9VzzvHi4wNhEewfUPMho3NdTkXpUNjLRXiqmwZfC9xZfIrCLBK0arHCBIdQV9' +
            'T0wBpd9r566UIkAeytmkc+NVrEW74c1TQL1WRgqHzSvdM3Ms0Xe0ZEalUiLzSe3oHp57+KhsngaDPj7krzg4aVElkZpxNw6g8Tf6cG6KtRI' +
            'excLPIqigRgyL1RwrZrrBVVzAHsa3epHQBcLlcULsqwNjCHbGC6mvdwHxpobpVUKIwI9R1Oj/mIlCrKs3bqXnD4wDqhmH+NBG7SOiUAe4JK' +
            '0liqtbaLrx55vZVPN1+eKQpqrnR7IxcMFphc6uM/XPNjAGOhVAHsWo3XduxddW6y09oNVe/maguWAa5syx9wegDZk7qlK/RE9Ex790C0tvi' +
            'qcA8wrSjr8h+DPt/wHLPBPuofgzmcAAAAASUVORK5CYII=',

            // 1
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0' +
            't1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDgvMTcvMTZ9/Sx6AAAHrElE' +
            'QVRIiYWWzW7cRhLH/1XVbJLzIWlkKyslCyzWMHwYISc/wOq6QK56ntE8j3LMcQ/eB/Ap0QSLGF4sDEROxtZI4nyQ7O6qPcyMLCn2bgFEsZtV/HV' +
            '1VZNF+D9iAG1vtjPj8Zi2o9FodGdyTxn+h5gZ6IsPAYIB4/EZjbaTw4sv2mNybAAwBjAanRnoywv4Ephs/RQYjwnDC8JkSq+PXlB5OaPhEHjz/v' +
            'DO7/nhe5tMgNXRwF5efm0YXhgmx4bRyEC0BTxYwOfAZAZgfHYHxNELetPk/Lxf0WXrmW9X9LHTv/N7sqxMd0o78q2+qfr2PG8UDxZwZvQ4WY/AD' +
            '6CvZwPebXIu4nvOnhZcXau4lPHShNkH6gOoAGibWYeSRgna3+MUPtRau0O9yRt9OZjp5+APwAYQzj5BXzY5X+aNLJqF825H2lg7JyaizGzMtSQq' +
            'kpiSamLVmCh5V8Q23qZu3o1HTZ5e34efnRndA/MWOn4E/a25disg07zrrakKtlQycSdQ7AWKPYe1DhR7TNxhS6U1qdC861dA9ltz7V42Ob+eDRj' +
            'DCxqfndGn8scaDANG68qk3W2kO6XTJviO1jnlvmTmDiP2XKK+me6YYcdMd1yiPiP2mLlDeSw7WufaBL/YKd1l3shukzMmx+uTca/E2AAab/I6wQ' +
            'UX8T0vmoUrgazIkjemIoTQEaReG7BjrLvCvAvDnjDvGutuG7Aj4F4I1DGmosiSL4Fs0SxcER1PcLGOevwpagcDRuN1tH7/I2V716zznrRIGZnLS' +
            'UOZE3WSoiuwEkp5QswcM8VkxqAgsEY1ZjllbOqgZpYA9W4nZXuSvDtUTJ7QCLBt1A4AzocX9Gw2oD8tZlxdHwowdyxZJhZy4qxIFrtK1iNDF2QF' +
            'GfmkxgRTI7Qw1EYssAAmp6acEhA11rG9dqmITl8f/apvBzM63Ww4A4ZTAOVgRtIdkOtX7MREmybTlHlLKBJRh1i6BuoB2DHYzkNNPWJ0E1HHEgp' +
            'N6rVB5qQU1xeW7oLKNfQu0UJEfHIwpZv3h1L0u4LYZLXlXtkKNpSK1IVR12A9GPoGdAHuAJQbKDMwAyAjKEBRiSOAEJ1GZY45rZIr9lL6UNp+7+' +
            '86/v57nJycGAPAq8kx4TnwsVoSZQVtzyqTiRo7Y3gz8wbL1VCoocBGq6EwUG7G3hheTR2TEzZmUWbKCvpYLQnPgVeTyaPj9Lf1QIqaFnUgcpFIh' +
            'CKISYjVwEYsBhYiFiKSROaISIggBoiRiZowieO1nxC5SIu6IClqus/5BN7IBwBAH/VmHAEkAGAyEJkymRJMiUwha01symIgZ2CytPEDgBrl5r1P' +
            '8VjW4H+uB4O6MC1q0+hMKVMWn9RcCuaSEkU1DiBplaQFeK2JWjUOShSDUVKjxOKTUqYag2nhbVDP7T7nDnwyHNovb4DY79gseMuKXkqeU2KJCQh' +
            'w3ARwYyKrBFkpaJWYlwpaJcjKRFYB3MD5JsGFxBqT55QVvTQLtcV+x355s+ZswWRmdH5+zsBEns3gxF/7sMyK3FtJWvdS1H7G3E+qfSHrElCqmi' +
            'cQG0yZqTVglYwWwlwF5UqcVMYyb1paZZ1Qp3avfTtABIbp9PRUAdgmx+d4NjuyJx7aVHvKA42NaGyStMn5OrlsmYgXkV2VILfKchNZbpTlJsHfR' +
            's6rRH6RXLZMjusmZW0jGnnQjU21p0889NnsyIDz+1tNmEyOrXpxaT9X+1buddPqOksgCbEsG2K/iuBlyLJ5gK8C+dsg2U1y2XWQ4iaQ3AZIFbJs' +
            'HpEvif0qltyAdsLquk7lXjf9XO1b9eLSJpv2aF2vm5M1nQ5tfnhl/ypE6ZtBvOVBSFq0Mfd1i3KZKJ83IlV0+U3g4rqm/CZwdh1dftOIVIlk3sI' +
            'tY+7rpEV7yz7QN4P4r0J0fnhl0+k6v7QB0ibPAMb06hV49eO+pL/mUvw6y1y/zsIKPmN4x/BknFmCM1IhTmQqRsaJBNFIQ1S0QdFmZa+NVQz114' +
            'Mg/25S+e1VOjmBAiMjIpiZMQAjAOPxOup3ea4iTdJS4tQVgd3TZolOXUm5DHm2WPhs0YqfN1RWrfj5wmeLkGeLSsrlEp2a3dNm6mLQUqJIk97lu' +
            'U6nQxuP8aDx237CyOyuX+aj747I/+hF5IMw57JHToxEFCsBibAEaltH3memKRosJUaZyFK6tphUm5TS09R+26bLHy4NgI5G62gB2KNmz8gMGAOE' +
            '8ZiPvvuOmt9/58P5nIGptO0uh27gbki8WmXU7wNVBZRlsEUmmi0y9f5GgYP0vtfT/Kuv9PKHHwyjkY6ATbNHf2z21mwjwxo+PD+n2WzGg8GAFos' +
            'Fd7td+k9dc6co6OAAqG5z6u80Np0Cy7q2vxSFLhYL63a7OpvNbDAY6OT01EabVILoi+3tQ/gYdDE8p+ODAzrq9+ny7Vva7/UIAK7K8s5vf/VnA3' +
            '7B1XxuR8+e2WVV2cV0aseTUxuN/gjdgh/8JLAxIgLORrDjycRwcqL/ePtWcXCgV2WZfnr3lf7a76ft9dO7G70qy4SDg7XdyYkeTyZ2Ntps7yPoV' +
            'tznJgEykNGZjdZOkwmOMTKMgNn0nPD2nukA+Prk1DAGzjHGOWAYjTZl+3koAPwXqHPB5HoEV/sAAAAASUVORK5CYII=',

            // 2
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0' +
            't1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDgvMTcvMTZ9/Sx6AAAHwklE' +
            'QVRIiYWXz44bNxLGv6pik936N5FtGetBjAUCOAdpc8h9D7oukOvkdSS9zk6OOQc+7BvsSghiYC5xxoFnZHlGI7W6m6zagyR77MxmCUgkxWL/+iu' +
            'SxRLh/xeCAfaha5jNZnTsTSYTA+hgePy6Z/5AMTPQn4wTDJjOpnubCTA8n+/bZ/eszvfV4mxkmO3b08nU/uwF/hf4oNAww4yG53NaDEZ0+cslnf' +
            'ZXBIyw7CzpBYBXAB7fPTZgjstV306/PrXh1dwWZyObYGIEetADD4E/qJwP5zQajOhZ95Kqt4HfFWvCnef2qqRN3v0w7263tk6/MHRqfVR2LTyt9' +
            'M361OZXcxstRvaQejMDPwQdDufUX/V5WS5lc9F2lQSH37oe1y2/yX2oSgqVo1CVFDq5D7huefzW9ZUEt7lou2W5lP6qz8PhnKazKR2Qn4j82DHQ' +
            'Ebpa9bl6HvhdqgQ3wQWKcps5F5AEiRmJuJFEWRKDmEJUK0jqNTFW5hJOqvhIQgq/Vtrvr3TxUbl97mqaTvfu7a/6/Lfngavr4FJ+63YRWZ2QeUM' +
            'GEVfF6JARS3SUXDQ0puZctJSiEBovaHKHRna9GJ5U8T+/Vrrqr3S0GNl0OrU99+BqMwATYDQYUTgoTfmtu0HwjeOgLEXlfKsmdMy5LjfcS4g9br' +
            'hnznWZ0GHnW8pSNI7DDYJP+a17lyoJzwOPBiPC5MC552qaTvcuXgDSw5dyW8cMXPnGcSDNcq2bguDyiDonsGcySUYsZKpGyaC1g98Z4o59Vho3u' +
            'yxqBQ11z7vmFq/TEEiLg2ozMwcDMAMWgxE9KpdUiXBodrJeIVOjwKkpSNCyqG0mKswQklKmZAQlI0KjRFVjmmUOrHUDFTJTaLcfU8pCepT+oovi' +
            'MWF/SgEAzgB8P5xTv9unm6s2n9SVVN65EHwWd02wTHKrtZ0odZCorUBOZJ4UbGSqSjWDdpAkTRRkntU1mlxexNutxlBX6dI73Ty91NVwRccgyID' +
            'hDMDpxSmdFBtCWzggSVTNGhIP0zyZtQBqK1PHCD1T9IzoUKOnTB2A2mTWiqZ5Q+KjahaQBG3hk2JDpxendHbvOAsR8WAwpp87P8sga0uztayB81' +
            'TXOTsqGkUbQBuKDky7ILSh1AIhwCgDG5sZEVjBFAGKmUPTxBTh8ihKqd0u0u/Z2v5a/0N/+OEHjMdjYwBYDBb0AsDmZkve5YREjCywwoSIHEE9E' +
            'XkQBVPOlSw32L5WzkEUlMjr3s4pTHwWGInYu5w2N1t6ceAcd/X9yIVt6FC9qymTRIkTwTKGgQHHBogpicGEwaJGDmAxmJCSGCCA29tbxokTZZKo' +
            '3tW0DZ0/3An3wC8+G/IfWkpkxmJGZMRiRmxkYkR86JMxixGRAUBzmF9+8rxPn38P/AqtqmVV7q1JYmAoGyVFlgyUzDiCpDGS2ohqY9rXJDVIGjO' +
            'Ohr09GyUw1CWxKvfWqlq2v8s+Aw/HQ3sFoH1yZyEGy1q9JOBk4qKI1MJSsdAO5EoYlwCXxLwFeN8nV5rQDiyViNQmLgo4Za1eCjHY3cmdvTpwjm' +
            'AyM/r+/JxHWAgKOET4TYM8IBYNmg4SulB0o8XuYXcXBvOHl1YC1WCUADYgtzbGOhOsM2R3FVzZzrCDQ40ScY5h+ufZmQIw3q/6OS6/emboQJcba' +
            'LtAtGTRkNVKslPmLXN2B/JrYndL7G6M3A2xuyF2tyC/Zs7umHkrJDtDVm+TRS0QlxsoOtDLr54ZcP7hVnIAMDobGV6+sWX5yMKgSrvrmFKGRjJU' +
            'asIp1gSIIdYJLBXMMhATTA1EDQy1ulACqRTnS6ZUCdDIbUg0cGlZBjvFGzs9G9n5xzUmYAbMr4b2+907Szei2uHonG+Ui1odduL81pg3xn6dkN9' +
            'SFt6bZTeUhfcJ+a2xXxvzRpzfqsNOuaid8412OKYb0d/v3tn8anjIyT4mhgQzTAHCy5e8LP8tj1OQslxlsXCZaPK1qmczb8oZMZwai6REScSYNJ' +
            'kiEmujRLVnrhNL7crYFEW/WUqVHhffJIzHOgUMRDAzYxyD52yG+dWVVU+DLuV5Sien0ZXdZpPaVe17O5d3tiZhY9FvGpI7c911Q3Jn0W9Mwsbln' +
            'W3te7tNaleu7Dbp5DQu5XmqngadX10ZZrPjhraPuo+qZzN6CfDX3z2jeu3lSS1SpfcS1UnLRKKyJOwkY0exduR8tEajCfLkWNOWUnIcU5Av0rVP' +
            'yXfr9MuPb2wM6HQyMRABhwzkXiizfbIH0MuXM/66+x2Ft2/ZfXHHVQWRsmYpGl5XifNtRugBuAV2rca6QTSVmabCawhI8X1Hq6dP9Zf1jzYeTw4' +
            'u3p/eA/mz9NaMgD18fn5O/dWKV3/vU/vthvuhTdfrHXd9TsAAu9tbyns9A66wrnf2pJvrqtrY5mlb+/9a2arf19HZmU2PS3kIp0fwJ5fEcXAK2G' +
            'hxZqt+X6/eDtR3v0mvXyNdpydRvvy22QJRe71mC0T58tvmOj2Jr18j+e436ertQFf9vo4WD0OPhT//AUQGAqYT2PliYePxWFcXF3o1GGhZFKn66' +
            'UZ9t5uOn+qnGy2LIl0NBrq6uNDxeKzni4VNJwf3PgC9v7keHjumhbMZARNMJ8D8/PwPc0ZnZzadAcAMmEyOKoE/+e/0X6RYpXpyj7eiAAAAAElF' +
            'TkSuQmCC',

            // 3
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0' +
            't1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDgvMTcvMTZ9/Sx6AAAHWElE' +
            'QVRIiYWXy24cNxaG//+QrEtf3L61DAWTjCM4GxlZ+QW8mFfo55H0PHqFLPQCXg2kzQhOkABjWIoUKaXu6iqS58yiWpfYjodAoarZZH38eUiev4j' +
            '/W4z3j5v7wcF93d7eUMuHfWj4SjGzvzb/InD/gMAe9gEcH4NYfKHpIfD6NWx/GBWwvxnM3wzg78AEbFB3AC52wfMTsPnvO66/qbmLXdxcnBI/AP' +
            'gPMHn2yk5wguq/rU2/eWPzXdjhCQx72LydwP1c/S14gO6Di2Pw/DXYbINb3am0l6/Y4IM8Gwv75QWBOYBzFONndrFUm2Jb66endla+0ukH2PwYd' +
            'vgahn3Yp/BPwffQXfD9T+9kq5zJ1feVTHOQ62Xjanjp4CV3JKYAGsCVZiWStkg6G09z46I+/nmtZ9217vzrjR6efA7/BGy8g/7xTra6N3J2+cF5' +
            'LH0oC8c/C78u167ARBI60UhKMPMotceNVl2V7VGfYtfnhHHaerqdz8p3uvPkL/A7sNxDD7g43ijt3kjuPnpUbUgYF21j1aq0GhiNIrpJgkwcOUm' +
            'QSUQ3AUajVWl121iVMC5QtSF3H/1W90be//ROFsfgsEjvdwg3k879A/AIkPri1J09GztUbRhdj4o0TkVKWipC4ZGLmF0Qzc4EpMJUXIbLkXC9IP' +
            'beS+eXvl/NVj3Wddy6WOb22at8BOiw4GgbxUYcHPB4FzzHiVx9X4nH0k/XdUjjVPTrojJw5IBJiu4RTGfJFTPL7nFyxQymM0b3SIGJgaN+XVRpn' +
            'Aqs6+Cx9FffV3KOE1nsgsP+H1T7Qfgezk/A754WzF2QVTl1Wa9CiizprQbCKPd5nMXVZlIixZDpiRQtUyLJzvocXBGE3pCSGkLWIPM8yuv8+Gmh' +
            '5ycgsHe3sgUGLI4P2WyDVz9Xcr0MjtZ6i0VwKZQCrUzz2MiJqj6icaaUxxn6RCmP1ThT1UdGTkzzOEOrnEKJWARa66+XwV39XEmzDS6OD3m7qQb' +
            'FiwV2Tk64nj1hAxH0zvVpHZRS5ChVNowUGANuoqYjMxYExAAFrCedh2XkBHVEdKIxJ+3XqPoxRJqZ4/rDCbG4P/bk9ty9uSjYjYUdbqTz4no4Dy' +
            'dBnZYiUlKkBnSsxBjERIkJhmus0DFFahMp1WkJJ4Fw3ntxHW7k2Vj43UUxLOQNT4b4HhE/AP1SOCpmDOjEl5Qs4gjxRisAK8yspFllQEWgMqAys' +
            '4pmJWCF0QpCfBZxvqQkdDIqZuyXQvyAgYO9QfH+nfhXiPUlc3FD9aQ50sUkAoqBQqMj6Yx0NDhT8zTc1ZnR3bZ1MYk5svRkLm4Y60sCrwAA+3dT' +
            '/bUSNpudYiTuLjy4HtaRYg/7fa08UHyKMHlqrleTZCYI6sRlE8u0lE0sgYxC14uwF0Evwh50vZBRxJJayiKWVVwWBO2SmevVwuSpAaefKj7AfPe' +
            'tAUCxUltVZjkUOXjNRkueGsX7jsKOHi2JVqCtkCtAWxItPVoKu+B9B2r0tKRecxGKvKrMipUagA3nYAPeOIjJZW/lUq1k0sAbBTUxSxTHTqBrB6' +
            'wc3ZION/TS0LNxXhrncAO6pQNWCl2LY8cs0aip542WTHqxVPv1sh/CsOFtTq5DvN9e2LSAts2p1nmcwJykRJ8T1wjeIWYRMYVZhEkwZCGcghqFW' +
            'Jui9cGvxNJaytwHQRIrU+uWOv3nS0W/bcAhsLEwhBlxAL4FpH566nI39avUFd7VJXKuVEKtaqPe4ojmKlMrAXoQhMEASyrshHlNhhWFK2hsK+fW' +
            'KbfdyJe9K5vUXt4nCgNMhvx0gPku7NfL3hoX1bZGyY36GMX3kLQW4crR33hvTSjlWrxcwdlwL+XaeWsc/Q2Fq0LS2onvV6M+2tYoNS7qr5e9zXc' +
            'xxHeTGLlRjX2AR0eQ+t+nzpdj16INqalDLEMRUiqS+sIogSaekpxlkA5m6rNRE01jktQ77/vQxb6ZthGo41a3zO2Pr/LRWygAAwkzs7t8fGvs3v' +
            '8B2foWkn//6LUtvEXvM9cB2XkE8WijT0ZBCaADPE1Rh4SoCS4nZ1VkSEnqPrnnL9LZb9CdJ9B7Azjk41tHQJhhiPWRNNtvOS1+cYWrnbsKrvHOe' +
            'SfOiThZty578tb6dMmsquqcVXPKmmPKefY45j63uelf5umHIzvC21sTMMj8zHNtLO0tfOtbyNUNpDw/d/XMSRtFyiySAu/6+WjWOdU6qLbXWbv5' +
            'PD+eQM9+g/4VCjz0XJ/YW7vNl1wcDtO+8wQ8X/4i3fglp+uP0ldCYI7Y/M4wfW7AOYq1WlO90HL5i83HL/X9H7CdJ9DDBWyI6z30FvzJWX33px2' +
            'eDJ3P59Cmf5n/AWT3/EWqJ/OIJVLYeR6xRKon8+iev0h/ArnpX+bz+YOY3nnpz78oPk8S5DDCvQF+9HZ40fn8SNsa+ey3d9r8iNxMkZsfh99tjT' +
            'yfH+nOE+jR24cLafO+L5SvfzvdfaRt2u0Bi8PP+xwuYJsjGNi7DdaXlQLDVP8PdB51DA7TlqEAAAAASUVORK5CYII='

        ];

        // 值
        var value = {

            // 标识
            id : 'chart',

            // 宽
            width : '100%',

            // 高
            height : '300',

            // 默认数据
            data : [

                // 分组
//              [
//
//                  {color : '#d3862a', name : '家庭成员'},
//                  {color : '#4a8d35', name : '手机通讯'},
//                  {color : '#056ee5', name : '网络社交'}
//
//              ]

            ],

            // 参数
            option : {

                // 网格
                grid : {

                    left        : 0,
                    right       : 0,
                    top         : 0,
                    bottom      : 0

                },

                // 分组
                legend : [{
                    orient      : 'vertical',
                    left        : 12,
                    bottom      : 12,
                    itemWidth   : 10,
                    itemHeight  : 10,
                    textStyle   : {color : '#FFF', fontSize : 12},
                    selectedMode:'single'
                    //selected: {
                    //
                    //    '家庭成员': true,
                    //
                    //    '手机通讯': false,
                    //    '网络社交':false
                    //}

                }
                ],


                // 序列
                series : [{

                    type        : 'graph',
                    layout      : 'force',
                    force       : {initLayout : 'circular', repulsion : '1000'/*, layoutAnimation : false*/},
                    roam        : true,



                }]

            }


        };



        // 主函数
        var main = function (/* value */ v) {

            // 值
            render_value(v);

            // 元素
            render_element(v);

            // 画布
            render_chart(v);

            // 行为
            render_action(v);

        };

        // 渲染（命名空间）
        var render = function () {

            // render.element
            // render.chart
            // render.action
            // render.index

        };

        // 渲染（值）
        var render_value = function (/* value */ v) {

            var $,
                a, b, c, d, e, f,
                i, j;

            // 标识
            if ($ = v['id']){ value['id'] = $};

            // 宽
            if ($ = v['width']) {value['width'] = $};

            // 高
            if ($ = v['height']) {value['height'] = $};

            // 点击
            if ($ = v['click']){ value['click'] = $};

            // 分组
            for ($ = (v['data'][0] ? value['data'][0] = v['data'][0] : value['data'][0]), a = value['option']['color'] = [,], b = value['option']['legend'][0]['data'] = [], c = value['option']['series'][0]['categories'] = [], i = 0; d = $[i]; i++) {

                // 颜色
                a.push(d.color);

                // 图例
                b.push(d.name);

                // 分组
                c.push({name : d.name});

            }

            // 节点



            for ($ = (v['data'][1] ? value['data'][1] = v['data'][1] : value['data'][1] = []), a = value['option']['series'][0]['nodes'] = [], b = value['option']['series'][0]['links'] = [], c = value['option']['color'], i = 0; d = $[i]; i++) {
                // 子


                if ($['#' + d.index] = i, i) {
                    // 点

                    var dIndex= d.index;

                    a.push({id:dIndex, symbol : 'circle', symbolSize : '20',name: d.jname,label:{normal:{show:true,position:[30, 10]}},itemStyle : {normal : {borderWidth : '.3', borderColor : '#ffffff'}}, category : d.category});

                    // 线
                    for (e = $[0]['index'], j = 0; (f = d.source[j]) !== undefined; j++) b.push({source : $['#' + f], target : i, lineStyle : {normal : {width : '.6', color : (e === f ? c[d.category + 1] : '#ffffff')}}});

                }

                // 根
                else {

                    // 点
                    a.push({symbol : 'image://' + d.image, symbolSize : '25',icon:'pin'});

                }
            }

        };

        // 渲染（元素）
        var render_element = function (/* value */ v) {

            var $ = render.element = document.getElementById(value['id']);

            // 宽
            $.style.width = "800px";

            // 高
            $.style.height = value['height'] + 'px';

        };

        // 渲染（画布）
        var render_chart = function (/* value */ v) {

            // 初始化
            render.chart = echarts.init(render.element);

            // 处理程序（图例改变）
            render.chart.on('legendselectchanged', handler_legendselectchanged);

            // 处理程序（点击）
            render.chart.on('click', handler_click);

            // 渲染
            render.chart.setOption(value.option);

            // 渲染（高亮根节点）
            render.chart.dispatchAction({type : 'highlight', seriesIndex : 0, dataIndex : 0});

        };

        // 渲染（行为）
        var render_action = function (/* value */ v) {

            $(render.element).append(

                '<div>                                                                                          \n' +
                '                                                                                               \n' +
                '    <style>                                                                                    \n' +
                '                                                                                               \n' +
                '        #' + value['id'] + '-action-all {                                                      \n' +
                '            position            : absolute;                                                    \n' +
                '            width               : 60px;                                                        \n' +
                '            height              : 40px;                                                        \n' +
                '            margin-left         : 15px;                                                        \n' +
                '            margin-top          : -115px;                                                      \n' +
                '            background          : transparent url("' + image[0] + '") no-repeat scroll 0 0;    \n' +
                '        }                                                                                      \n' +
                '                                                                                               \n' +
                '        #' + value['id'] + '-action-all.false {                                                \n' +
                '            background-position : -60px 0;                                                     \n' +
                '        }                                                                                      \n' +
                '                                                                                               \n' +
                '    </style>                                                                                   \n' +
                '                                                                                               \n' +
                '    <a id="' + value['id'] + '-action-all" style="display: none;"><!-- script --></a>                                 \n' +
                '                                                                                               \n' +
                '</div>                                                                                         \n'

            );

            $(document).click(function (/* event */ e) {

                var t;

                // 全部
                if ($(e.target).is(t = $('#' + value['id'] + '-action-all'))) {

                    // t.attr('class', handler_legendselectchanged({selected : {'全部' : !render.action}}));

                }

                // 其它
                else {

                    t.attr('class', render.action);

                }

            });

            render.action = true;

        };

        // 处理程序（索引）
        var handler_index = function (/* data */ d) {

            if (!render.index) {

                var a, b, c,
                    i, j;

                // 索引
                for (i = d.index, j = 0; c = i[j]; j++) {

                    i['#' + c] = true;

                }

                // 点
                for (a = d.style.emphasis, b = d.style.normal, d = value['option']['series'][0]['nodes'], j = 1; c = d[j]; j++) {

                    // 当前节点
                    if (i[0] === c.index) {

                        if (a.symbolSize)
                            c.symbolSize = a.symbolSize;

                        if (a.borderWidth)
                            c.itemStyle.normal.borderWidth = a.borderWidth;

                        if (a.borderColor)
                            c.itemStyle.normal.borderColor = a.borderColor;

                    }

                    // 模糊节点
                    else if (!i['#' + c.index]) {

                        if (b.symbol)
                            c.symbol = b.symbol[c.category];

                        if (b.symbolSize)
                            c.symbolSize = b.symbolSize;

                    }

                }

                // 线
                for (a = value['data'][1][0], d = value['option']['series'][0]['links'], j = 0; c = d[j]; j++) {

                    // 隐藏
                    if ((!i['#' + c.source] && a.index !== c.source) || (!i['#' + c.target] && a.index !== c.target)) {

                        c.lineStyle.normal.opacity = '0';

                    }

                }

                // 渲染
                render.chart.setOption(value.option);

                // 赋值
                render.index = true;

            }

        };

        // 处理程序（还原索引）
        var handler_recoveryIndex = function (/* data */ d) {

            if (render.index) {

                // 值
                render_value({data : value['data']});

                // 渲染
                render.chart.setOption(value.option);

                // 赋值
                render.index = false;

            }

        };

        // 处理程序（图例改变）
        var handler_legendselectchanged = function (/* data */ d) {

            var $,
                a, b, c;


            if ((a = d.selected['全部']) !== undefined) {

                // 选择
                for (c in b = value['data'][0]) render.chart.dispatchAction({type : (a ? 'legendSelect' : 'legendUnSelect'), name : b[c].name});

                // 赋值
                return render.action = a;

            }

            // 其它
            else {

                // 取消高亮
                for (c in b = d.selected) if (b[c] === false)

                    return render.action = false;

                // 高亮
                return render.action = true;

            }

        };

        // 处理程序（点击）
        var handler_click = function (/* data */ d) {
            var $;
            if ($ = value['click']) if (/* 不是根节点 */ d.dataIndex) {

                $(value['data'][1][d.dataIndex]);

            }

        };



        // 接口
        API = window.forceDirectedChartSA = main;

        // 图片
        API.image = image;

        // 状态值
        API.state = render;

        // 渲染索引
        API.renderIndex = handler_index;

        // 渲染还原索引
        API.renderRecoveryIndex = handler_recoveryIndex;
console.log(main)



} ());

